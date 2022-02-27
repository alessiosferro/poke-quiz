import {useQuery} from 'react-query';
import axios from 'axios';
import {IPokemon} from '../model/Pokemon.model';
import { UsePokemonProps } from '../model/UsePokemon.props';

export const usePokemon = ({ pokemonId, choice }: UsePokemonProps) => {
	return useQuery<IPokemon>(
		["pokemon", { id: pokemonId, choice }],
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