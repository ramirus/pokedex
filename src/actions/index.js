export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export const REQUEST_POKEMONS_FAILED = 'REQUEST_POKEMONS_FAILED';
export const RECEIVE_POKEMON_DETAIL_INFO = 'RECEIVE_POKEMON_DETAIL_INFO';
export const HANDLE_POKEMON_INPUT = 'HANDLE_POKEMON_INPUT';
export const REQUEST_TYPE_INFO = 'REQUEST_TYPE_INFO';
export const RECEIVE_TYPE_INFO = 'RECEIVE_TYPE_INFO';
export const REQUEST_TYPE_INFO_FAILED = 'REQUEST_TYPE_INFO_FAILED';
export const REMOVE_TYPE = 'REMOVE_TYPE';


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

export function requestPokemonsFailed() {
    return {
        type: REQUEST_POKEMONS_FAILED,
    }
}

export function receivePokemonDetailInfo(data) {
    return {
        type: RECEIVE_POKEMON_DETAIL_INFO,
        payload: data
    }
}

export function requestTypeInfo() {
    return {
        type: REQUEST_TYPE_INFO,
    }
}

export function receiveTypeInfo(data) {
    return {
        type: RECEIVE_TYPE_INFO,
        payload: data
    }
}

export function requestTypeInfoFailed() {
    return {
        type: REQUEST_TYPE_INFO_FAILED,
    }
}
