import React, {Component} from 'react';
import {array, object, func} from 'prop-types';
import Pagination from "react-js-pagination";

import PokemonItem from '../PokemonItem';

class PokemonList extends Component {
    static propTypes = {
        pokemonArray: array.isRequired,
        pokemonsDetail: object.isRequired,
        requestDetailInfo: func.isRequired,
    };

    state = {
        activePage: 1,
        perPage: 10,
    };

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
    };

    renderPokemonItems = () => {
        let items = [];
        const {activePage, perPage} = this.state;
        const {pokemonArray, pokemonsDetail, requestDetailInfo} = this.props;

        let startIndex = (activePage - 1) * perPage;
        let finishIndex = startIndex + perPage;
        for(let i = startIndex; i < finishIndex; i++) {
            let item = pokemonArray[i];
            if(!pokemonArray[i]) break;
            items.push(
                <PokemonItem
                    key={item.name}
                    pokemon={item}
                    pokemonDetail={pokemonsDetail.get(item.name)}
                    requestDetailInfo={requestDetailInfo}
                />
            )
        }
        return items;
    };

    render() {
        const {pokemonArray} = this.props;
        let items = this.renderPokemonItems();
        return (
            <div className="pokemon-list">
                {items}
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.perPage}
                    totalItemsCount={pokemonArray.length}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default PokemonList;
