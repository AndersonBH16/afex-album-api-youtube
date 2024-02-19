import React from "react";
import PropTypes from "prop-types";
import { ModalVideo } from "../modals/ModalVideo";
import { useState } from "react";

export function VideoCard({ video }){
    const [showModal, setShowModal] = useState(false);
    const handleDeleteButtonClick = (e) => {        
        
        e.stopPropagation();
    };

    return (<>        
        <div className="video-card" type="button" onClick={() => setShowModal(true)}>
            <button className="video-delete" onClick={ handleDeleteButtonClick }>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            </button>
            <img className="video" src={video.thumbnailUrl} alt={video.title} />
            <div className="video-duration">{video.duration}</div>
        </div>
        <ModalVideo videoInfo={video} showModal={showModal} closeModal={() => setShowModal(false)} />
    </>
    );
}

VideoCard.propTypes = {
    video: PropTypes.shape({
        thumbnailUrl : PropTypes.string.isRequired,
        duration     : PropTypes.string.isRequired,
    }).isRequired
};