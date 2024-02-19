import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { deleteVideoRequest } from "../../../api/process-videos";

export const ModalDeleteVideo = ({ videoInfo, showModal, closeModal }) => {
    const handleDeleteVideo = async() => {
        try {
            await deleteVideoRequest(videoInfo.videoId);
        } catch (error) {
            console.error(error);
        }
    };

    return (
    <>
      {showModal ? (
        <>
            <div className="modal-video justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="modal-delete-video relative w-auto h-438 my-6 mx-auto max-w-5xl">
                    <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative p-6 mb-1 flex-auto">
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
                            <div className="text-pretty mt-4 text-2xl">
                                <h3 className="ml-20 font-semibold">¿Seguro que quieres eliminar este video?</h3>
                            </div>
                            <div className="flex justify-end mt-12">
                                <div className="space-x-4">
                                    <Button className="modal-cancel-button border-blue-600 text-blue-600" variant="outlined" onClick={() => closeModal(false)}>Cancelar</Button>
                                    <Button className="modal-delete-button bg-blue-600" variant="filled" onClick={handleDeleteVideo}>Eliminar</Button>
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

ModalDeleteVideo.propTypes = {
  videoInfo: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};
