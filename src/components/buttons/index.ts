import React from "react";
import AsyncButton from "./AsyncButton";
import Button from "./Button";

interface ButtonComponent extends React.FC<React.ComponentProps<typeof Button>> {
    Async: typeof AsyncButton;
}

const Buttons = Button as ButtonComponent;

Buttons.Async = AsyncButton;

export {Buttons, AsyncButton};