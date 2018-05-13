import React, { Component } from 'react';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';

import './index.css';
import PokemonList from '../../components/PokemonList';
import SearchBox from '../../components/SearchBox';



export class AppContainer extends Component {
    static propTypes = {
        handlePokemonInput: func.isRequired,
        removeType: func.isRequired,
        requestDetailInfo: func.isRequired,
        handleTypeClick: func.isRequired,
        pokemonsReducer: object
    };

    render() {
        const {
            pokemonShowArray,
            isLoading,
            isError,
            pokemonsDetail,
            typeName
        } = this.props.pokemonsReducer;

        const {
            handlePokemonInput,
            removeType,
            requestDetailInfo,
            handleTypeClick
        } = this.props;

        return (
            <div className="app">
                <SearchBox
                    handlePokemonInput={handlePokemonInput}
                />

                {
                    typeName &&
                        <div className="type-filter">
                            <span
                                className="type-filter-label"
                                onClick={removeType}
                            >
                                {typeName}
                            </span>
                        </div>

                }
                {
                    isError &&
                    <span>is error</span>
                }
                <PokemonList
                    pokemonArray={pokemonShowArray || []}
                    pokemonsDetail={pokemonsDetail || new Map()}
                    requestDetailInfo={requestDetailInfo}
                    handleTypeClick={handleTypeClick}
                    isLoading={isLoading}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemonsReducer: state.pokemonsReducer,
});

const mapDispatchToProps = dispatch => ({
    requestDetailInfo: (pokemon) => {
        dispatch({type: 'REQUEST_DETAIL_INFO', payload: pokemon})
    },
    handlePokemonInput: (inputValue) => {
        dispatch({type: 'HANDLE_POKEMON_INPUT', payload: inputValue})
    },
    handleTypeClick: (type) => {
        dispatch({type: 'HANDLE_TYPE_CLICK', payload: type})
    },
    removeType: () => {
        dispatch({type: 'REMOVE_TYPE'})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)
