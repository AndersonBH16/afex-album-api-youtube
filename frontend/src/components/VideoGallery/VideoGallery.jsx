import { useState, useEffect } from "react";
import { VideoCard } from "./cardsVideos/VideoCard";
import { getVideosRequest } from "../../api/process-videos";

export function VideoGallery({ videos }){
    const [localVideos, setLocalVideos] = useState([]);

    useEffect(() => {
        const videoList = async () => {
            try {
                const response = await getVideosRequest();
                setLocalVideos(response.data.reverse());
            } catch (error) {
                console.log(error);
            }
        };

        videoList();
    }, []);

    const updateVideosList = (updatedVideos) => {
        setLocalVideos(updatedVideos);
    };

    const combinedVideos = [...videos, ...localVideos];

    return(
        <div className="container">
            <div className="container-gallery">
                {
                    combinedVideos.map((video, index) => {
                        return (
                            <VideoCard 
                                key={index}
                                video={video}
                                onClick={() => setShowModal(true)} 
                                localVideos = { localVideos }
                                updateVideosList={ updateVideosList }/>
                        );                    
                    })
                }
            </div>
        </div>
    );
}