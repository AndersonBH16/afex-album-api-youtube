import React, { useRef } from "react";

export function AddButton() {
    const inputRef = useRef(null);

    const handleClearInput = () => {
        if (inputRef.current) {
          inputRef.current.value = "";
          clearInput();
        }
    };
    
    return <button className="btn-primary" type='submit' onClick={handleClearInput}><b>Añadir</b></button>;
}