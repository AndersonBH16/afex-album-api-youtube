import Video from '../models/video.model.js';
import { getVideoId, getVideoInfo } from '../services/youtube-services.js';

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
    const { title, description, duration, thumbnailUrl } = videoInfo;

    try {
        const newVideo = new Video({
            videoId,
            link: videoLink,
            title,
            description,
            duration,
            thumbnailUrl,
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
        res.status(500).json({ error: 'Error al guardar el video' });
    }
};

export const verifyVideo = async (req, res) => {

};

export const deleteVideo = async (req, res) => {
    const video = await Video.findByIdAndDelete(req.params.id);
    if(!video) return res.status(404).json({message: "Video not found"});
    return res.sendStatus(204);
};