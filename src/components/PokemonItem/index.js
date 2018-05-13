import React, { Component } from 'react';
import {object, func} from 'prop-types';

import './index.css';
import LoadingScreen from '../../components/LoadingScreen';
import PieChart from '../../components/PieChart';

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
            <h3 className="pokemon-name">{pokemonDetail.name}</h3>
            <img
                className="pokemon-ava"
                src={pokemonDetail.sprites.front_default}
                alt={pokemonDetail.name}
            />
            <div className="pokemon-type-box">
                {
                    pokemonDetail.types.map(item => (
                        <span
                            key={item.type.name}
                            className="pokemon-type"
                            onClick={() => this.props.handleTypeClick(item.type)}
                        >{item.type.name}</span>
                    ))
                }
            </div>

            <dl className="pokemon-stats">
                {
                    pokemonDetail.stats.map(item =>
                        <div
                            key={item.stat.name}
                            className="pokemon-stat"
                        >
                            <dt>{item.stat.name}</dt>
                            <dd>{item.base_stat}</dd>
                        </div>
                    )
                }
            </dl>
            <PieChart
                pokemonStats={pokemonDetail.stats}
            />
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
                        <LoadingScreen/>
                }
            </div>
        );
    }
}

export default PokemonItem;
