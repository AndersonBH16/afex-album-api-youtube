import Video from '../models/video.model.js';
import { google } from 'googleapis';

const API_KEY = 'AIzaSyBbErC0sKKd6h0lYkGAwPfrvzVTUx9Xqs8';

const youtube = google.youtube({
    version: 'v3',
    auth: API_KEY
});

async function getVideoInfo(videoId) {
    try {
      const response = await youtube.videos.list({
        part: 'snippet',
        id: videoId
      });
  
      const video = response.data.items[0];
      if (video) {
        const title = video.snippet.title;
        const description = video.snippet.description;
        const thumbnailUrl = video.snippet.thumbnails.default.url;

        const videoInfo = {
            title: title,
            description : description,
            image: thumbnailUrl
        };

        return videoInfo;
      } else {
        console.log('Video not found.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
}

async function getVideoId(videoLink){
    const expresionRegular = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const videoId = videoLink.match(expresionRegular);

   return videoId[1];
}

export const getVideos = async (req, res) => {
    const videos = await Video.find();
    res.json(videos);
};

export const getVideo = async (req, res) => {
    const video = await Video.findById(req.params.id);
    if(!video) return res.status(404).json;
    res.json(video);
};

export const saveVideo = async (req, res) => {
    const videoLink = req.body.videoLink;
    const videoId = await getVideoId(videoLink);
    const videoInfo = await getVideoInfo(videoId);
    const {title, description, image} = videoInfo;

    try {
        const newVideo = new Video({
            videoId,
            title,
            description,
            image,
            state: "1",
            watchBefore: false
        });

        await newVideo.save();
        
        res.json({
            message: 'Video guardado exitosamente', 
            videoLink: videoLink,
            videoId: videoId,
            videoInfo: videoInfo,
            new: newVideo
        });
    } catch (error) {
        console.log(error);
    }
};

export const verifyVideo = async (req, res) => {

};

export const deleteVideo = async (req, res) => {
    const video = await Video.findByIdAndDelete(req.params.id);
    if(!video) return res.status(404).json({message: "Video not found"});
    return res.sendStatus(204);
};