import { google } from 'googleapis';
import { convertFromISO } from '../utils/utils.js';

const API_KEY = 'AIzaSyBbErC0sKKd6h0lYkGAwPfrvzVTUx9Xqs8';

const youtube = google.youtube({
    version: 'v3',
    auth: API_KEY
});

export const getVideoInfo = async (videoId) => {
    try {
      const response = await youtube.videos.list({
        part: 'snippet, contentDetails',
        id: videoId
      });
  
      const video = response.data.items[0];

      if (video) {        
        const title = video.snippet.title;
        const description = video.snippet.description;
        const duration = await convertFromISO(video.contentDetails.duration);
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        
        const videoInfo = {
            title: title,
            description : description,
            duration: duration,
            thumbnailUrl: thumbnailUrl
        };

        console.log("aki response ************:");
        console.log(videoInfo);
        return videoInfo;
      } else {
        console.log('Video not found.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
}

export const getVideoId = async (videoLink) => {
    const expresionRegular = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const videoId = videoLink.match(expresionRegular);

   return videoId[1];
}