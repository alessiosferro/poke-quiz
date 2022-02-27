import React from "react";

export interface PokeInputButtonProps {
    pokemonClickHandler: React.MouseEventHandler<HTMLInputElement>;
    disabled: boolean;
    answerName: string;
    value: string;
}