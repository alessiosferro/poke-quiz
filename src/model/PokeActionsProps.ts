import { MouseEventHandler } from "react";

export interface PokeActionsProps {
    isWrongAnswer: boolean;
    resetHandler: MouseEventHandler<HTMLButtonElement>;
    restartHandler: MouseEventHandler<HTMLButtonElement>;
}