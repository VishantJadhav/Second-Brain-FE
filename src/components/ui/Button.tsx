import type { ReactElement } from "react";

export interface ButtonProps {
    variant : "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick : () => void;
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"

}

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6"
}

const defaultStyles = "rounded-md p-4";

export const Button = (props : ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.text}</button>
}
