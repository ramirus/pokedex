import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// import './App.css';
import PokemonList from '../../components/PokemonList';
import SearchBox from '../../components/SearchBox';


class AppContainer extends Component {
    render() {
        const {
            pokemons,
            isLoading,
            isError,
            pokemonsDetail,
        } = this.props.pokemonsReducer;
        return (
            <div className="App">
                <SearchBox
                    handlePokemonSubmit={() => {}}
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
                    pokemonArray={pokemons || []}
                    pokemonsDetail={pokemonsDetail || new Map()}
                    requestDetailInfo={this.props.requestDetailInfo}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemonsReducer: state.pokemonsReducer,
    // slider: state.rootReducer.productsReducer.slider,
    // basket: state.rootReducer.basketReducer.basket
});

const mapDispatchToProps = dispatch => ({
    requestDetailInfo: (url) => {
        dispatch({type: 'REQUEST_DETAIL_INFO', payload: url})
    }
    // productsActions: bindActionCreators(actions, dispatch),
    // changePage: bindActionCreators({
    //     changePage: () => push('/about-us'),
    // }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)
