import {getRandomNumber} from './getRandomNumber';

const MAX_POKEMON_ID = 898;

export const getPokemonChoices = (): {
    A: number;
    B: number;
    C: number;
    D: number;
  } => ({
    A: getRandomNumber(MAX_POKEMON_ID) + 1,
    B: getRandomNumber(MAX_POKEMON_ID) + 1,
    C: getRandomNumber(MAX_POKEMON_ID) + 1,
    D: getRandomNumber(MAX_POKEMON_ID) + 1,
  });
  