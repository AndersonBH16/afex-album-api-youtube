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
    });

    return(
        <div className="video-gallery">
            <br></br><br></br>
            <hr></hr>
            <h3>Video Almacenados</h3>
            {
                videos.map((video, index) => {
                    <VideoCard key={ index } video={ video }/>
                })
            }            
        </div>
    );
}