import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// import './App.css';
import PokemonList from '../../components/PokemonList';
import SearchBox from '../../components/SearchBox';


class AppContainer extends Component {
    render() {
        const {
            pokemonShowArray,
            isLoading,
            isError,
            pokemonsDetail,
        } = this.props.pokemonsReducer;
        return (
            <div className="App">
                <SearchBox
                    handlePokemonInput={this.props.handlePokemonInput}
                />
                {
                    isLoading &&
                        <span>is loading</span>
                }
                {
                    isError &&
                    <span>is error</span>
                }
                <PokemonList
                    pokemonArray={pokemonShowArray || []}
                    pokemonsDetail={pokemonsDetail || new Map()}
                    requestDetailInfo={this.props.requestDetailInfo}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemonsReducer: state.pokemonsReducer,
});

const mapDispatchToProps = dispatch => ({
    requestDetailInfo: (url) => {
        dispatch({type: 'REQUEST_DETAIL_INFO', payload: url})
    },
    handlePokemonInput: (inputValue) => {
        dispatch({type: 'HANDLE_POKEMON_INPUT', payload: inputValue})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)
