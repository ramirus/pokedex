import React, { Component } from 'react';
import {object, func} from 'prop-types';

class PokemonItem extends Component {
    static propTypes = {
        pokemon: object.isRequired,
        requestDetailInfo: func.isRequired,
        pokemonDetail: object.isRequired
    };

    componentDidMount () {
        const {requestDetailInfo, pokemon} = this.props;
        requestDetailInfo(pokemon.url);
    }

    render() {
        const {pokemon, pokemonDetail} = this.props;
        return (
            <div className="pokemon-box">
                <span>{pokemon.name}</span>
                <span>{pokemonDetail ? pokemonDetail.weight : ''}</span>
            </div>
        );
    }
}

export default PokemonItem;
