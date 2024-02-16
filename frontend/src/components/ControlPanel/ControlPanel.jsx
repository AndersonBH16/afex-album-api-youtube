import { TitleLabel } from "./titles/TitleLabel";
import { InputVideoLink } from "./inputs/InputVideoLink";
import { AddButton } from "./buttons/AddButton";
import { useForm } from 'react-hook-form';
import { saveVideoRequest } from "../../api/process-videos";

export function ControlPanel(){
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log("en control panel jsx");
            console.log(data); // hasta aquí todo bien
            const res = await saveVideoRequest({videoLink: data.videoLink});
        } catch (error) {
            console.log(error);
        }        
    };

    return(
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div>
                        <TitleLabel />
                    </div>                    
                    <div className="input-group">
                        <InputVideoLink register={register} />
                        <AddButton />
                    </div>
                </div>                
            </form>            
        </div>
    );
}

export default ControlPanel;