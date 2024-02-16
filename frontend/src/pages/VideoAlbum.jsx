import {ControlPanel} from "../components/ControlPanel/ControlPanel";
import {VideoGallery} from "../components/VideoGallery/VideoGallery";

export function VideoAlbum(){
    return (
        <div className='content-center'>
            <ControlPanel />
            <VideoGallery />
        </div>
    );
}

export default VideoAlbum;