import {useQuery} from 'react-query';
import axios from 'axios';
import {IPokemon} from '../model/Pokemon.model';

export const usePokemon = (pokemonId: number) => {
	return useQuery<IPokemon>(
		["pokemon", pokemonId],
		async ({ signal }) => {
			const response = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
				{
					signal,
				}
			);

			return response.data;
		},
		{
			staleTime: Infinity,
		}
	);
};