import React, { Component } from 'react';
import {object, func} from 'prop-types';

import './index.css';

class PokemonItem extends Component {
    static propTypes = {
        pokemon: object.isRequired,
        requestDetailInfo: func.isRequired,
        handleTypeClick: func.isRequired,
        pokemonDetail: object
    };

    componentDidMount () {
        const {
            requestDetailInfo,
            pokemon,
            pokemonDetail,
        } = this.props;
        // check if data already loaded
        if(!pokemonDetail) {
            requestDetailInfo(pokemon);
        }
    }

    renderPokemonDetail = (pokemonDetail) => (
        <div className="pokemon-detail">
            <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name}/>
            <h3 className="pokemon-name">{pokemonDetail.name}</h3>
            {
                pokemonDetail.types.map(item => (
                    <span
                        key={item.type.name}
                        className="pokemon-type"
                        onClick={() => this.props.handleTypeClick(item.type)}
                    >{item.type.name}</span>
                ))
            }
            <dl className="pokemon-stats">
                Stats: <br/>
                {
                    pokemonDetail.stats.map(item => [
                        <dt key={item.stat.name}>{item.stat.name}</dt>,
                        <dd key={item.base_stat}>{item.base_stat}</dd>
                    ])
                }
            </dl>
        </div>
    );

    render() {
        const {pokemonDetail} = this.props;
        return (
            <div className="pokemon-box">
                {
                    pokemonDetail ?
                        this.renderPokemonDetail(pokemonDetail)
                        :
                        <span>is loading</span>
                }
            </div>
        );
    }
}

export default PokemonItem;
