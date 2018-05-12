/* eslint-disable no-constant-condition */
import {put, call, fork, all, takeEvery} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import * as actions from '../actions'

const URL = 'https://pokeapi.co/api/v2/';

const getApi = (path) =>
    fetch(path)
        .then(response => response.json())
        .catch(error => {
            console.log(`request failed ${error}`);
            return 'error';

        });


export function* requestDetailInfo(action) {
    const pokemonDetailInfo = yield call(getApi, action.payload);
    yield put(actions.receivePokemonDetailInfo(pokemonDetailInfo));
}

export function* fetchPokemons() {
    yield put(actions.requestPokemons());
    const pokemons = yield call(getApi, URL + 'pokemon/?limit=1000');
    if(pokemons === 'error') {
        put(actions.requestPokemonsFailed());
    } else {
        yield put(actions.receivePokemons(pokemons.results));
    }
}

export function* requestTypeInfo(action) {
    yield put(actions.requestTypeInfo());
    const pokemons = yield call(getApi, action.payload.url);
    if(pokemons === 'error') {
        put(actions.requestTypeInfoFailed());
    } else {
        yield put(actions.receiveTypeInfo(pokemons));
    }

}

export function* startup() {
    yield fork(fetchPokemons);
}

export default function* root() {
    yield fork(startup);
    yield all([
        takeEvery('REQUEST_DETAIL_INFO', requestDetailInfo),
        takeEvery('HANDLE_TYPE_CLICK', requestTypeInfo),
    ]);

}