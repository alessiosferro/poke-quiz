import {getRandomNumber} from './getRandomNumber';

export const getPokemonChoices = (): {
    A: number;
    B: number;
    C: number;
    D: number;
  } => ({
    A: getRandomNumber() + 1,
    B: getRandomNumber() + 1,
    C: getRandomNumber() + 1,
    D: getRandomNumber() + 1,
  });
  