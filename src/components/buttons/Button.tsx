import {ButtonProps} from "./interface";
import React from "react";
import {ButtonStyle} from "./style";

const Button = ({children, label, onClick, className, style = ButtonStyle}: ButtonProps) => {

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
    };

    return <button style={style} className={className}
                   onClick={handleClickButton}>{children ?? label}</button>;
};


export default Button;