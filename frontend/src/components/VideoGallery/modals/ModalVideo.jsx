import React from "react";
import PropTypes from "prop-types";

export const ModalVideo = ({ videoInfo, showModal, closeModal }) => {
  return (
    <>
      {showModal ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">                
                        <div className="relative p-6 flex-auto">
                            <div className="flex items-center justify-end p-3 rounded-b">
                                <button
                                    className="btn-cerrar"
                                    onClick={() => closeModal(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-x-lg"
                                        viewBox="0 0 16 16"
                                    >
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="contenedor-modal mt-5">
                                <iframe
                                title={videoInfo.title}
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoInfo.videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                ></iframe>
                                <p className="duration">{videoInfo.duration}</p>
                            </div>
                            <div className="video-details">
                                <h3>{videoInfo.title}</h3>
                                <div className="description-container">
                                    <p className="description">{videoInfo.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

ModalVideo.propTypes = {
  videoInfo: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
