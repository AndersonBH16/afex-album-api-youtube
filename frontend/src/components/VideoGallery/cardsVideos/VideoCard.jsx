import React from "react";
import ReactPlayer from 'react-player';

export function VideoCard({ video }){
    return (
        <div className="video-item">
          <ReactPlayer
            url={video.videoUrl} // Asegúrate de que esta propiedad contenga la URL del video de YouTube
            controls
            width="100%"
            height="auto"
          />
          <div className="video-details">
            <p>{video.title}</p>
            <p>{video.duration}</p>
          </div>
        </div>
      );
}