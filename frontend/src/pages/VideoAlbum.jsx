import {ControlPanel} from "../components/ControlPanel/ControlPanel";
import {VideoGallery} from "../components/VideoGallery/VideoGallery";
import { useState } from "react";

export function VideoAlbum(){
    const [videos, setVideos] = useState([]);

    return (
        <div className='content-center'>
            <ControlPanel videos = {videos} setVideos={setVideos}/>
            <VideoGallery videos={videos}/>
        </div>
    );
}

export default VideoAlbum;