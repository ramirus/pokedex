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
        perPage: 12,
    };

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
    };

    setPerPage = (e, perPage) => {
      e.preventDefault();
      this.setState({
          perPage: perPage
      })
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

    renderPerPage = (perPage) => (
        <div
            key="pagination-per-page-box"
            className="pagination-per-page-box"
        >
            <span>Per page:</span>
            <ul className="pagination-per-page">
                <li className={perPage === 12 ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => this.setPerPage(e, 12)}
                    >12</a>
                </li>
                <li className={perPage === 24 ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => this.setPerPage(e, 24)}
                    >24</a>
                </li>
                <li className={perPage === 36 ? 'active' : ''}>
                    <a
                        href="#"
                        onClick={(e) => this.setPerPage(e, 36)}
                    >36</a>
                </li>
            </ul>
        </div>
    );

    static getDerivedStateFromProps(nextProps, prevState) {
        let currentPokemons = prevState.activePage * prevState.perPage;
        if(nextProps.pokemonArray.length < currentPokemons) {
            return {activePage: 1};
        }
        return null;
    }

    render() {
        const {pokemonArray, isLoading} = this.props;
        const {activePage, perPage} = this.state;
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
            <div
                className="pagination-box"
                key="pagination-box"
            >
                {
                    pokemonArray.length !== 0 &&
                    [
                        <Pagination
                            key="pagination"
                            activePage={activePage}
                            itemsCountPerPage={perPage}
                            totalItemsCount={pokemonArray.length}
                            onChange={this.handlePageChange}
                            hideNavigation={true}
                            firstPageText='⟨⟨'
                            lastPageText='⟩⟩'
                        />,
                        this.renderPerPage(perPage)
                    ]
                }

            </div>
        ];
    }
}

export default PokemonList;
