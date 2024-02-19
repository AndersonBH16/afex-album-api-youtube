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
    console.log(videoId);

    if(!videoId.response){
        res.json({
            message: videoId.message,
            response: false
        });
    }else{
        const videoInfo = await getVideoInfo(videoId.response);
        const { title, description, duration, thumbnailUrl } = videoInfo;

        try {
            const newVideo = new Video({
                videoId: videoId.response,
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
                new: newVideo,
                response: true
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error al guardar el video' });
        }
    }
};

export const verifyVideo = async (req, res) => {

};

export const deleteVideo = async (req, res) => {
    const videoId = req.params.videoId;

    try {
        const result = await Video.findOneAndDelete( {videoId} );

        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Video not found" });
        }
    } catch (error) {
        console.error("delete error: ", error);
    }
};