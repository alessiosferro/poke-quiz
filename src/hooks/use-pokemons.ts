import axios from 'axios';
import { useQuery } from 'react-query';
import { LightPokemon, PokemonsResponse } from '../model/PokemonsResponse';

export const usePokemons = () => {
    return useQuery('pokemons', async ({signal}) => {
        const response = await axios.get<PokemonsResponse<LightPokemon[]>>('https://pokeapi.co/api/v2/pokemon?limit=1126', {signal});
        return response.data.results;
    }, {
        staleTime: Infinity
    });
}