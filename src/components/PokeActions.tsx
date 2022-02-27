import { FC } from "react";
import "./PokeActions.css";
import { PokeActionsProps } from "../model/PokeActionsProps";

const PokeActions: FC<PokeActionsProps> = (props) => {
  return (
    <div className="poke-actions">
      {!props.isWrongAnswer && (
        <button className="button poke-action" onClick={props.continueHandler}>
          Continua
        </button>
      )}
      {props.isWrongAnswer && (
        <button className="button poke-action" onClick={props.restartHandler}>
          Ricomincia
        </button>
      )}
    </div>
  );
};

export default PokeActions;
