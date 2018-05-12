export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export const REQUEST_POKEMONS_FAILED = 'REQUEST_POKEMONS_FAILED';
export const RECEIVE_POKEMON_DETAIL_INFO = 'RECEIVE_POKEMON_DETAIL_INFO';
export const HANDLE_POKEMON_INPUT = 'HANDLE_POKEMON_INPUT';


export function requestPokemons() {
    return {
        type: REQUEST_POKEMONS,
    }
}

export function receivePokemons(data) {
    return {
        type: RECEIVE_POKEMONS,
        payload: data
    }
}

export function receivePokemonDetailInfo(data) {
    return {
        type: RECEIVE_POKEMON_DETAIL_INFO,
        payload: data
    }
}

export function requestPokemonsFailed() {
    return {
        type: REQUEST_POKEMONS_FAILED,
    }
}
