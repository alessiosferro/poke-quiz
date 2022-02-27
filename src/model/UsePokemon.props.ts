export type PokemonChoice = 'A' | 'B' | 'C' | 'D';

export interface UsePokemonProps {
    pokemonId: number;
    choice: PokemonChoice;
}
