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

    if (video && video.snippet && video.snippet.thumbnails) {
        const title = video.snippet.title;
        const description = video.snippet.description;
        const duration = await convertFromISO(video.contentDetails.duration);

        let thumbnailUrl;
        if (video.snippet.thumbnails.maxres) {
            thumbnailUrl = video.snippet.thumbnails.maxres.url;
        } else if (video.snippet.thumbnails.high) {
            thumbnailUrl = video.snippet.thumbnails.high.url;
        } else {
            console.log('No se pudo encontrar la portada del video.');
            return null;
        }

        const videoInfo = {
            title: title,
            description: description,
            duration: duration,
            thumbnailUrl: thumbnailUrl
        };

      return videoInfo;
    } else {
      console.log('Video not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const getVideoId = async (videoLink) => {
  const expresionRegular = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const videoId = videoLink.match(expresionRegular);

  if (videoId === null) {
    return {
      message: "No es un link de youtube válido. Ingresa nuevamente",
      response: false
    };
  } else {
    return {
      message: "link valido",
      response: videoId[1]
    };
  }
};
