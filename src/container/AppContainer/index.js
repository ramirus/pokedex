import React, { Component } from 'react';
import {func, object} from 'prop-types';
import {connect} from 'react-redux';

// import './App.css';
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
            <div className="App">
                <SearchBox
                    handlePokemonInput={handlePokemonInput}
                />
                {
                    isLoading &&
                        <span>is loading</span>
                }
                {
                    typeName &&
                        <span
                            className="type-name"
                            onClick={removeType}
                        >
                            {typeName}
                        </span>
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
