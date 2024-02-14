import Video from '../models/video.model.js';

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
    const {videoId, title, description, thumbnail} = req.body;

    try {
        const newVideo = new Video({
            videoId,
            title,
            description,
            thumbnail
        });
    
        const newVideoSaved = await newVideo.save();
        res.json(newVideoSaved);
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