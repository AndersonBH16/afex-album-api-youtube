import React from "react";
import PropTypes from "prop-types";
import { ModalVideo } from "../modals/ModalVideo";
import { useState } from "react";

export function VideoCard({ video, onClick }){
    const [showModal, setShowModal] = useState(false);

    return (<>
        <button className="video-card" type="button" onClick={() => setShowModal(true)}>
            <img src={video.thumbnailUrl} alt={video.title} />
            <div className="thumbnail-text">{video.duration}</div>
        </button>
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