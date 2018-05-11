import React, { Component } from 'react';
// import './App.css';
import PokemonList from '../../components/PokemonList';
import SearchBox from '../../components/SearchBox';


class AppContainer extends Component {
    render() {
        return (
            <div className="App">
                <SearchBox
                    handlePokemonSubmit={() => {}}
                />
                <PokemonList
                    pokemonArray={[]}
                />
            </div>
        );
    }
}

export default AppContainer;
