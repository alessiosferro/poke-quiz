import { useReducer, useMemo } from "react";
import { getPokemonChoices, getRandomNumber } from "../utils";
import { usePokemon } from "./use-pokemon";

export const usePokemonChoices = () => {
  const [choices, getRandomPokemons] = useReducer(
    () => getPokemonChoices(),
    getPokemonChoices()
  );

  const pokemonA = usePokemon({
    pokemonId: choices.A,
    choice: "A",
  });

  const pokemonB = usePokemon({
    pokemonId: choices.B,
    choice: "B",
  });

  const pokemonC = usePokemon({
    pokemonId: choices.C,
    choice: "C",
  });

  const pokemonD = usePokemon({
    pokemonId: choices.D,
    choice: "D",
  });

  const answer = useMemo(() => {
    if (!pokemonA.data || !pokemonB.data || !pokemonC.data || !pokemonD.data) {
      return null;
    }

    return [pokemonA.data, pokemonB.data, pokemonC.data, pokemonD.data][
      getRandomNumber({ range: 4 })
    ];
  }, [pokemonA.data, pokemonB.data, pokemonC.data, pokemonD.data]);

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