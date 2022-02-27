import { FC } from "react";
import { PokeInputButtonProps } from "../model/PokeInputButton.props";

const PokeInputButton: FC<PokeInputButtonProps> = (props) => {
  const getButtonClassName = (pokemonName: string) => {
    const baseClass = "pokemon-grid-container__button";

    if (!props.disabled || !props.answerName) {
      return baseClass;
    }

    if (pokemonName === props.answerName) {
      return `${baseClass} pokemon-grid-container__button--valid`;
    }

    return `${baseClass} pokemon-grid-container__button--invalid`;
  };

  return (
    <input
      type="button"
      onClick={props.pokemonClickHandler}
      disabled={props.disabled}
      className={getButtonClassName(props.value)}
      value={props.value}
    />
  );
};

export default PokeInputButton;
