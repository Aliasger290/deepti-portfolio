export default async function handler(req, context) {
  const API_KEY = Netlify.env.get("PUBLIC_YOUTUBE_API_KEY");
  const CHANNEL_HANDLE = Netlify.env.get("PUBLIC_YOUTUBE_CHANNEL_HANDLE");

  if (!API_KEY || !CHANNEL_HANDLE) {
    return new Response(JSON.stringify({ error: "Missing credentials" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Strip leading @ if present
  const handle = CHANNEL_HANDLE.replace(/^@/, "");

  try {
    // Step 1: Get uploads playlist ID using channel handle
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${handle}&key=${API_KEY}`
    );
    const channelData = await channelRes.json();

    if (channelData.error) {
      return new Response(
        JSON.stringify({ error: channelData.error.message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!channelData.items?.length) {
      return new Response(
        JSON.stringify({ error: `Channel not found for handle: ${handle}` }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Step 2: Get videos
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=24&key=${API_KEY}`
    );
    const playlistData = await playlistRes.json();

    if (playlistData.error) {
      return new Response(
        JSON.stringify({ error: playlistData.error.message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const videos = (playlistData.items || []).map((item) => {
      const snippet = item.snippet;
      const videoId = snippet.resourceId.videoId;
      const thumbnails = snippet.thumbnails;
      return {
        id: videoId,
        title: snippet.title,
        publishedAt: snippet.publishedAt,
        thumbnail:
          thumbnails.maxres?.url ||
          thumbnails.high?.url ||
          thumbnails.medium?.url ||
          thumbnails.default?.url,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      };
    });

    return new Response(JSON.stringify({ videos }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600", // cache for 1 hour
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  path: "/api/videos",
};
