import React, { FC, useMemo, useReducer } from "react";
import { getRandomNumber, getPokemonChoices } from "../utils";
import { usePokemon } from "../hooks/use-pokemon";
import "./PokeQuiz.css";
import { useState } from "react";
import PokeInputButton from "./PokeInputButton";
import PokeImage from "./PokeImage";
import { usePokemonChoices } from "../hooks/use-pokemon-choices";

const PokeQuiz: FC = () => {
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const {
    answer,
    pokemonA,
    pokemonB,
    pokemonC,
    pokemonD,
    pokemonNames,
    getRandomPokemons,
  } = usePokemonChoices();

  const resetHandler = () => {
    getRandomPokemons();
    setIsAnswerSubmitted(false);
  };

  if (!answer || !pokemonA || !pokemonB || !pokemonC || !pokemonD) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PokeImage src={answer.sprites.front_default} />

      <div className="pokemon-grid-container">
        {pokemonNames.map((name) => (
          <PokeInputButton
            key={name}
            pokemonClickHandler={() => setIsAnswerSubmitted(true)}
            disabled={isAnswerSubmitted}
            answerName={answer.name}
            value={name}
          />
        ))}
      </div>

      {isAnswerSubmitted && <button onClick={resetHandler}>Riprova</button>}
    </div>
  );
};

export default PokeQuiz;
