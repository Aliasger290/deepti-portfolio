const API_KEY = import.meta.env.PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.PUBLIC_YOUTUBE_CHANNEL_ID;

export async function getChannelVideos(maxResults = 24) {
  if (!API_KEY || !CHANNEL_ID) {
    console.warn("YouTube API key or Channel ID not set.");
    return [];
  }

  try {
    // Step 1: Get uploads playlist ID from channel
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID.trim()}&key=${API_KEY.trim()}`
    );
    const channelData = await channelRes.json();

    if (channelData.error) {
      console.error("YouTube API Error:", channelData.error.message);
      return [];
    }

    if (!channelData.items || channelData.items.length === 0) {
      console.error("Channel not found. CHANNEL_ID:", CHANNEL_ID);
      return [];
    }

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Step 2: Get videos from uploads playlist
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY.trim()}`
    );
    const playlistData = await playlistRes.json();

    if (playlistData.error) {
      console.error("YouTube Playlist Error:", playlistData.error.message);
      return [];
    }

    if (!playlistData.items) return [];

    return playlistData.items.map((item) => {
      const snippet = item.snippet;
      const videoId = snippet.resourceId.videoId;
      const thumbnails = snippet.thumbnails;

      return {
        id: videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnail: {
          default: thumbnails.default?.url,
          medium: thumbnails.medium?.url,
          high: thumbnails.high?.url,
          maxres: thumbnails.maxres?.url,
        },
        publishedAt: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}
