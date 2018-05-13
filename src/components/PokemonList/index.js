import React, {Component} from 'react';
import {array, object, func, bool} from 'prop-types';
import Pagination from "react-js-pagination";

import './index.css';
import PokemonItem from '../PokemonItem';
import LoadingScreen from '../../components/LoadingScreen';

class PokemonList extends Component {
    static propTypes = {
        pokemonArray: array.isRequired,
        pokemonsDetail: object.isRequired,
        requestDetailInfo: func.isRequired,
        handleTypeClick: func.isRequired,
        isLoading: bool.isRequired,
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
        const {
            pokemonArray,
            pokemonsDetail,
            requestDetailInfo,
            handleTypeClick
        } = this.props;

        let startIndex = (activePage - 1) * perPage;
        let finishIndex = startIndex + perPage;
        for (let i = startIndex; i < finishIndex; i++) {
            let item = pokemonArray[i];
            if (!pokemonArray[i]) break;
            items.push(
                <PokemonItem
                    key={item.name}
                    pokemon={item}
                    pokemonDetail={pokemonsDetail.get(item.name)}
                    requestDetailInfo={requestDetailInfo}
                    handleTypeClick={handleTypeClick}
                />
            )
        }
        return items;
    };

    render() {
        const {pokemonArray, isLoading} = this.props;
        let items = this.renderPokemonItems();
        return [
            <div
                key='pokemon-list'
                className="pokemon-list"
            >
                {
                    isLoading && <LoadingScreen/>
                }
                {items}
            </div>,
            <Pagination
                key="pagination"
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.perPage}
                totalItemsCount={pokemonArray.length}
                onChange={this.handlePageChange}
                hideNavigation={true}
            />
        ];
    }
}

export default PokemonList;
