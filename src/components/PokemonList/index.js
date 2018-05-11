import React, { Component } from 'react';
import {array} from 'prop-types';

import PokemonItem from '../PokemonItem';

class PokemonList extends Component {
    static propTypes = {
        pokemonArray: array.isRequired,
    };

    render() {
        const {pokemonArray} = this.props;
        return (
            <div className="pokemon-list">
                {pokemonArray.map((item, index) => (
                    <PokemonItem
                        key={index}
                        pokemon={item}
                    />
                ))}
            </div>
        );
    }
}

export default PokemonList;
