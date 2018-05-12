import { combineReducers } from 'redux'
import * as actions from '../actions'

function filterArray(state, filter) {
    let pokemons = state.pokemonAllArray;
    console.log(pokemons.filter(item => item.name.includes(filter)));
    return pokemons.filter(item => item.name.includes(filter));
}

function pokemonsReducer(state = { pokemonsDetail: new Map()}, action) {
    switch (action.type) {
        case actions.REQUEST_POKEMONS:
            return {...state,
                isLoading: true,
            };
        case actions.RECEIVE_POKEMONS:
            return {...state,
                pokemonAllArray: action.payload,
                pokemonShowArray: action.payload,
                isLoading: false
            };
        case actions.REQUEST_POKEMONS_FAILED:
            return {...state,
                isError: true,
                isLoading: false
            };
        case actions.RECEIVE_POKEMON_DETAIL_INFO:
            return {...state,
                pokemonsDetail: state.pokemonsDetail.set(action.payload.name, action.payload)
            };
        case actions.HANDLE_POKEMON_INPUT:
            return {...state,
                filterValue: action.payload,
                pokemonShowArray: filterArray(state, action.payload)
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    pokemonsReducer,
});

export default rootReducer
