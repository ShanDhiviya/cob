import { type InputHTMLAttributes} from 'react';


export const InputText = (props:InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input {...props}/>
    );
};
