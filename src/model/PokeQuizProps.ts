import React from "react";
import { ScoreReducerAction } from "./ScoreReducer";

export interface PokeQuizProps {
    dispatch: React.Dispatch<ScoreReducerAction>;
}