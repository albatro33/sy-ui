import React from "react";

export interface ButtonProps {
    label?: number | string;
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    className?: string;
    children?: React.ReactNode | string | number | boolean;
    style?: React.CSSProperties;
}

export interface AsyncButtonProps extends ButtonProps {
    onComplete?: (data: any) => void;
    method: 'string';
    endpoint: 'string';
    body: JSON;
}