import {getRandomNumber} from './getRandomNumber';

const MAX_POKEMON_ID = 898;

function getRandomChoice(previousChoices: number[] = []): number {
  const num = getRandomNumber(MAX_POKEMON_ID) + 1;

  if (previousChoices.find(choice => choice === num)) {
    return getRandomChoice(previousChoices);
  }

  return num;
}

export const getPokemonChoices = (previousChoices: number[]): {
    A: number;
    B: number;
    C: number;
    D: number;
  } => {
    const A = getRandomChoice(previousChoices);
    const B = getRandomChoice([...previousChoices, A]);
    const C = getRandomChoice([...previousChoices, A, B]);
    const D = getRandomChoice([...previousChoices, A, B, C]);

    return {
      A,
      B,
      C,
      D,
    }
  };
  