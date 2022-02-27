import { useReducer, useMemo, useState, useEffect } from "react";
import { getPokemonChoices, getRandomNumber } from "../utils";
import { usePokemon } from "./use-pokemon";

const initialChoices = getPokemonChoices([]);

export const usePokemonChoices = () => {
  const [previousChoices, setPreviousChoices] = useState<number[]>([]);

  const [choices, getRandomPokemons] = useReducer(
    () => getPokemonChoices(previousChoices),
    initialChoices
  );

  const pokemonA = usePokemon(choices.A);
  const pokemonB = usePokemon(choices.B);
  const pokemonC = usePokemon(choices.C);
  const pokemonD = usePokemon(choices.D);

  const answer = useMemo(() => {
    if (!pokemonA.data || !pokemonB.data || !pokemonC.data || !pokemonD.data) {
      return null;
    }

    return [pokemonA.data, pokemonB.data, pokemonC.data, pokemonD.data][
      getRandomNumber(4)
    ];
  }, [pokemonA.data, pokemonB.data, pokemonC.data, pokemonD.data]);

  useEffect(() => {
    if (!answer) return;
    setPreviousChoices(choices => ([...choices, answer.id]));
  }, [answer]);

  const pokemonNames = useMemo(() => {
    if (!pokemonA.data || !pokemonB.data || !pokemonC.data || !pokemonD.data) {
      return [];
    }

    return [
      pokemonA.data.name,
      pokemonB.data.name,
      pokemonC.data.name,
      pokemonD.data.name,
    ];
  }, [pokemonA.data, pokemonB.data, pokemonC.data, pokemonD.data]);


  return {
    getRandomPokemons,
    answer,
    pokemonNames,
    pokemonA: pokemonA.data,
    pokemonB: pokemonB.data,
    pokemonC: pokemonC.data,
    pokemonD: pokemonD.data
  }
}