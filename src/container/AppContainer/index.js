import React, { Component } from 'react';
// import './App.css';
import PokemonList from '../../components/PokemonList';
import SearchBox from '../../components/SearchBox';


class AppContainer extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default AppContainer;
