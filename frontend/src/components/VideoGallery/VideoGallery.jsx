import { useState, useEffect } from "react";
import { VideoCard } from "./cardsVideos/VideoCard";
import { getVideosRequest } from "../../api/process-videos";

export function VideoGallery(){
    const [videos, setVideos] = useState([]);    

    useEffect(() => {        
        const videoList = async() => {
            try {
                const response = await getVideosRequest();
                setVideos(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        videoList();
    }, []);    

    return(
        <div className="container">
            <div className="container-gallery">
                {
                    videos.map((video, index) => {
                        return (
                            <VideoCard key={index} video={video} onClick={() => setShowModal(true)} />
                        );                    
                    })
                }
            </div>
        </div>
    );
}