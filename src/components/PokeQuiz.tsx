import { FC } from "react";
import "./PokeQuiz.css";
import { useState } from "react";
import PokeInputButton from "./PokeInputButton";
import PokeImage from "./PokeImage";
import { usePokemonChoices } from "../hooks/use-pokemon-choices";
import PokeActions from "./PokeActions";
import { PokeQuizProps } from "../model/PokeQuizProps";

const PokeQuiz: FC<PokeQuizProps> = (props) => {
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

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
    setIsAnswerSubmitted(false);
    setIsWrongAnswer(false);
    getRandomPokemons();
  };

  const restartHandler = () => {
    setIsAnswerSubmitted(false);
    setIsWrongAnswer(false);
    props.dispatch("RESET_SCORE");
    getRandomPokemons();
  };

  const clickHandler = (name: string) => {
    if (name === answer?.name) {
      props.dispatch("INCREMENT_SCORE");
    } else {
      setIsWrongAnswer(true);
    }

    setIsAnswerSubmitted(true);
  };

  if (!answer || !pokemonA || !pokemonB || !pokemonC || !pokemonD) {
    return <p className="pokemon-loading">Caricando un nuovo pokemon...</p>;
  }

  return (
    <>
      <PokeImage src={answer.sprites.front_default} />

      <div className="pokemon-grid-container">
        {pokemonNames.map((name) => (
          <PokeInputButton
            key={name}
            pokemonClickHandler={() => clickHandler(name)}
            disabled={isAnswerSubmitted}
            answerName={answer.name}
            value={name}
          />
        ))}
      </div>

      {isAnswerSubmitted &&
        (isWrongAnswer ? (
          <p className="pokemon-answer-feedback">Hai perso!</p>
        ) : (
          <p className="pokemon-answer-feedback">
            Complimenti, hai indovinato!
          </p>
        ))}

      {isAnswerSubmitted && (
        <PokeActions
          isWrongAnswer={isWrongAnswer}
          resetHandler={resetHandler}
          restartHandler={restartHandler}
        />
      )}
    </>
  );
};

export default PokeQuiz;
