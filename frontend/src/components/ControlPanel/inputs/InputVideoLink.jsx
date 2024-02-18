import React from "react";

export function InputVideoLink({ register, popoverVisible }) {
  return (
    <>
        <input
            type="text"
            {...register("videoLink", { required: true })}
            placeholder="Añadir"
            className={`h-14 rounded-md ${popoverVisible ? 'border-red-500' : ''}`}
        />
    </>
  );
}