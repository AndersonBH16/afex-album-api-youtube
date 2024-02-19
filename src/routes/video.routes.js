import { Router } from "express";
import {
    getVideos, 
    getVideo,
    saveVideo,
    verifyVideo,
    deleteVideo
} from '../controllers/video.controller.js';

const router = Router();

router.get('/videos', getVideos);
router.get('/video/:id', getVideo);
router.post('/video', saveVideo);
// router.post('/videos/verify', verifyVideo);
router.delete('/video/:videoId', deleteVideo);

export default router;