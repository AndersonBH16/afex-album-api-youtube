import { TitleLabel } from "./titles/TitleLabel";
import { InputVideoLink } from "./inputs/InputVideoLink";
import { AddButton } from "./buttons/AddButton";
import { useForm } from 'react-hook-form';
import { saveVideoRequest } from "../../api/process-videos";
import { useState } from "react";
import { PopoverLinkValidate } from "../popover/PopoverLinkValidate";

export function ControlPanel({ videos, setVideos }) {
    const { register, handleSubmit } = useForm();
    const [popoverVisible, setPopoverVisible] = useState(false);
    const [popoverMessage, setPopoverMessage] = useState("");

    const onSubmit = async (data) => {
        try {
            const res = await saveVideoRequest({ videoLink: data.videoLink });
            const statusResponse = res.data.response;
            
            if(statusResponse){
                setVideos([res.data.new, ...videos]);
                setPopoverVisible(false);
            }else{
                setPopoverMessage("El link no es válido. Ingrese otro.");
                setPopoverVisible(true);
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const closePopover = () => {
        setPopoverVisible(false);
    };

    return(
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div>
                        <TitleLabel />
                    </div>                    
                    <div className="input-group mt-4">
                        <InputVideoLink register={register} popoverVisible={popoverVisible} />
                        {popoverVisible && (
                            <div className="absolute top-20 left-1/2 border-blue-950 pl-3 pt-1 bg-gray-200 rounded text-xs">
                                <div className="flex items-center mb-2">
                                    <p className="flex-1 mr-4">{popoverMessage}</p>
                                    <button className="bg-gray-400 rounded-full p-1 hover:bg-gray-600 text-white text-xs cursor-pointer" onClick={closePopover}>
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
                            </div>
                        )}
                        <AddButton />
                    </div>
                </div>                
            </form>
        </div>
    );
}

export default ControlPanel;