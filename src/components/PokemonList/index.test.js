import React from "react";
import {mount, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import PokemonList from './index';

configure({adapter: new Adapter()});

describe("PokemonList", () => {
    let props;
    let mountedScreen;
    const appScreen = () => {
        if (!mountedScreen) {
            mountedScreen = mount(
                <PokemonList {...props} />
            );
        }
        return mountedScreen;
    };

    beforeEach(() => {
        props = {
            pokemonArray: [],
        };
        mountedScreen = undefined;
    });

    it("always renders a pokemon-list block", () => {
        const block = appScreen().find(".pokemon-list");
        expect(block.length).toBeGreaterThan(0);
    });

    it('when pokemonArray is empty PokemonItem is not render', () => {
        const point = appScreen().find("PokemonItem");
        expect(point.length).toBe(0);
    });

    describe('pokemon-list', () => {
        const pokemonArray = [
            {},
            {}
        ];

        beforeEach(() => {
            props.pokemonArray = pokemonArray;
        });

        it('render PokemonItems when pokemonArray is not empty', () => {
            const item = appScreen().find("PokemonItem");
            expect(item.length).toBe(2);
        });

    })
})
;