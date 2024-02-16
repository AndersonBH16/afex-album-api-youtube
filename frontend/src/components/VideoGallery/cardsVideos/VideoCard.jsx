import React from "react";
import ReactPlayer from 'react-player';

export function VideoCard({ video }){
    console.log("en ViedoCard.jsx");
    console.log(video);
    return (
        // <div className="video-item">
        //   <ReactPlayer
        //     url={video.link}
        //     controls
        //     width="100%"
        //     height="auto"
        //   />
        //   <div className="video-details">
        //     <p>{video.title}</p>
        //     <p>{video.duration}</p>
        //   </div>
        // </div>
        <div className="video-item">
            <div className="video-player-wrapper">
                <iframe
                title={video.title}
                width="100%"
                height="auto"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
                <div className="video-info-overlay">
                </div>
            </div>
            <div className="video-details">
                <p>{video.title}</p>
                <p>{video.description}</p>
            </div>
        </div>
      );
}