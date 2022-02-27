import { FC, useEffect } from "react";
import "./PokeQuiz.css";
import { useState } from "react";
import PokeInputButton from "./PokeInputButton";
import PokeImage from "./PokeImage";
import { usePokemonChoices } from "../hooks/use-pokemon-choices";
import PokeActions from "./PokeActions";
import { PokeQuizProps } from "../model/PokeQuizProps";

const PokeQuiz: FC<PokeQuizProps> = (props) => {
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);

  const {
    answer,
    pokemonA,
    pokemonB,
    pokemonC,
    pokemonD,
    pokemonNames,
    setPreviousChoices,
    getRandomPokemons,
  } = usePokemonChoices();

  const continueHandler = () => {
    setSubmittedAnswer("");
    setIsWrongAnswer(false);
    getRandomPokemons();
  };

  const restartHandler = () => {
    setSubmittedAnswer("");
    setIsWrongAnswer(false);
    setPreviousChoices([]);
    props.dispatch("RESET_SCORE");
    getRandomPokemons();
  };

  const clickHandler = (name: string) => {
    if (name === answer?.name) {
      props.dispatch("INCREMENT_SCORE");
    } else {
      setIsWrongAnswer(true);
    }

    setSubmittedAnswer(name);
  };

  if (!answer || !pokemonA || !pokemonB || !pokemonC || !pokemonD) {
    return <p className="pokemon-loading">Caricando un nuovo pokemon...</p>;
  }

  return (
    <>
      <PokeImage src={answer.sprites.front_default} />

      {!submittedAnswer && (
        <div className="pokemon-grid-container">
          {pokemonNames.map((name) => (
            <PokeInputButton
              key={name}
              pokemonClickHandler={() => clickHandler(name)}
              disabled={submittedAnswer.length > 0}
              answerName={answer.name}
              value={name}
            />
          ))}
        </div>
      )}

      {submittedAnswer &&
        (isWrongAnswer ? (
          <p className="pokemon-answer-feedback">
            Hai perso! <br /> <br /> Hai selezionato{" "}
            <em className="text-error">{submittedAnswer}</em>. <br /> Il nome
            corretto era <em className="text-success">{answer.name}</em>.
          </p>
        ) : (
          <p className="pokemon-answer-feedback">
            Complimenti, hai indovinato!
          </p>
        ))}

      {submittedAnswer && (
        <PokeActions
          isWrongAnswer={isWrongAnswer}
          continueHandler={continueHandler}
          restartHandler={restartHandler}
        />
      )}
    </>
  );
};

export default PokeQuiz;
