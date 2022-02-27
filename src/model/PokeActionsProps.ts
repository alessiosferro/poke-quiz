import { MouseEventHandler } from "react";

export interface PokeActionsProps {
    isWrongAnswer: boolean;
    continueHandler: MouseEventHandler<HTMLButtonElement>;
    restartHandler: MouseEventHandler<HTMLButtonElement>;
}