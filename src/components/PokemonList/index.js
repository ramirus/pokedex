import React, {Component} from 'react';
import {array, object, func} from 'prop-types';

import PokemonItem from '../PokemonItem';

class PokemonList extends Component {
    static propTypes = {
        pokemonArray: array.isRequired,
        pokemonsDetail: object.isRequired,
        requestDetailInfo: func.isRequired,
    };

    render() {
        const {pokemonArray, pokemonsDetail, requestDetailInfo} = this.props;
        return (
            <div className="pokemon-list">
                {pokemonArray.map((item, index) => {
                        if (index <= 10) {
                            return (<PokemonItem
                                key={index}
                                pokemon={item}
                                pokemonDetail={pokemonsDetail.get(item.name)}
                                requestDetailInfo={requestDetailInfo}
                            />)
                        }
                    }
                )}
            </div>
        );
    }
}

export default PokemonList;
