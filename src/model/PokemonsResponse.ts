export interface PokemonsResponse<T> {
    results: T;
    count: number;
    next: string;
    previous: string;
}

export interface LightPokemon {
    name: string;
    url: string;
}