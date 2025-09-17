import type { ReactElement } from "react";

export interface ButtonProps {
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon? : ReactElement;
    onClick? : () => void;
}

const variantStyles = {
    "primary" : " text-white",  
    "secondary" : "bg-purple-300 text-purple-600"
}  

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6",
}

const defaultStyles = "rounded-md p-4 flex items-center";

export function Button({variant, size, text, startIcon, onClick} : ButtonProps) {
    return <button onClick={onClick} className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]}`}>
        {startIcon ? <div className="pr-2" > {startIcon} </div> : null } {text} 
    </button>
}  
 