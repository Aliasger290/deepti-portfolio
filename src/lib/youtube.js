const API_KEY = import.meta.env.PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.PUBLIC_YOUTUBE_CHANNEL_ID;

// Add this at the top level so it runs during build
if (typeof window === 'undefined') {
  console.log('🔍 BUILD TIME - YouTube Config:');
  console.log('   API_KEY exists:', !!API_KEY);
  console.log('   API_KEY value:', API_KEY ? `${API_KEY.substring(0, 10)}...` : 'UNDEFINED');
  console.log('   CHANNEL_ID exists:', !!CHANNEL_ID);
  console.log('   CHANNEL_ID value:', CHANNEL_ID || 'UNDEFINED');
}

export async function getChannelVideos(maxResults = 20) {
  if (!API_KEY || !CHANNEL_ID) {
    console.error('❌ MISSING CREDENTIALS - Videos will not load');
    console.error('   PUBLIC_YOUTUBE_API_KEY:', API_KEY ? '✓ Set' : '✗ MISSING');
    console.error('   PUBLIC_YOUTUBE_CHANNEL_ID:', CHANNEL_ID ? '✓ Set' : '✗ MISSING');
    return [];
  }

  try {
    // Step 1: Get the uploads playlist ID from the channel
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const channelData = await channelRes.json();

    if (channelData.error) {
      console.error('❌ YouTube API Error:', channelData.error.message);
      return [];
    }

    if (!channelData.items || channelData.items.length === 0) {
      console.error("❌ Channel not found. Check your CHANNEL_ID.");
      return [];
    }

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Step 2: Get videos from uploads playlist
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`
    );
    const playlistData = await playlistRes.json();

    if (playlistData.error) {
      console.error('❌ YouTube API Error:', playlistData.error.message);
      return [];
    }

    if (!playlistData.items) {
      console.error("❌ No videos found in playlist.");
      return [];
    }

    console.log(`✅ Fetched ${playlistData.items.length} videos`);

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
    console.error("❌ Error fetching YouTube videos:", error);
    return [];
  }
}
