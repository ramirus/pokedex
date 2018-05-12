import { combineReducers } from 'redux'
import * as actions from '../actions'

function filterArray(state, filter = '', array) {
    let pokemons = array ? array : state.pokemonAllArray;
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
                pokemonShowArray: filterArray(state, action.payload, state.pokemonTypeArray)
            };
        case actions.REQUEST_TYPE_INFO:
            return {...state,
                isLoading: true,
            };
        case actions.RECEIVE_TYPE_INFO:
            console.log(action.payload);
            let pokemonTypeArray = action.payload.pokemon.map(item => item.pokemon);
            return {...state,
                pokemonTypeArray: pokemonTypeArray,
                typeName: action.payload.name,
                pokemonShowArray: filterArray(state, state.filterValue, pokemonTypeArray),
                isLoading: false
            };
        case actions.REQUEST_TYPE_INFO_FAILED:
            return {...state,
                isError: true,
                isLoading: false
            };
        case actions.REMOVE_TYPE:
            return {...state,
                pokemonTypeArray: [],
                typeName: '',
                pokemonShowArray: filterArray(state, state.filterValue),
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    pokemonsReducer,
});

export default rootReducer
