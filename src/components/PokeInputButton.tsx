import { FC } from "react";
import { PokeInputButtonProps } from "../model/PokeInputButtonProps";
import "./PokeInputButton.css";

const PokeInputButton: FC<PokeInputButtonProps> = (props) => {
  return (
    <input
      type="button"
      onClick={props.pokemonClickHandler}
      disabled={props.disabled}
      className="button poke-button"
      value={props.value}
    />
  );
};

export default PokeInputButton;
