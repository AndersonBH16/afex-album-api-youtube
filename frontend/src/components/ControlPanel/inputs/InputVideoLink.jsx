import { useForm } from 'react-hook-form';

export function InputVideoLink({register}) {
  return (
    <input
        type="text"
        {...register("videoLink", {required: true})}
        placeholder="Añadir"
        autoFocus
        className = "h-14 rounded-md input-field"
    />
  );
}