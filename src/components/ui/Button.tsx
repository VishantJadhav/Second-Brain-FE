import type { ReactElement } from "react";

type Variants = "primary" | "secondary"

export interface ButtonProps {
    variant : Variants
    size : "sm" | "md" | "lg";
    text : string;
    startIcon? : ReactElement;
    endIcon? : ReactElement;
    onClick : () => void;
}

const variantStyles = {
    "primary" : "bg-purple-600  text-white py-2 px-4 rounded-lg flex items-center gap-2",
    "secondary": "bg-purple-200  text-purple-600 py-2 px-4 rounded-lg flex items-center gap-2"

}

export const Button = (props : ButtonProps) => {
    return <button className={variantStyles[props.variant]}>{props.text}</button>
}

<Button variant="primary" size="md" text="aaa" onClick={() => {}}></Button>