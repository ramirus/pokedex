import React from "react";
import {mount, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import PokemonItem from './index';

configure({adapter: new Adapter()});

describe("PokemonItem", () => {
    let props;
    let mountedScreen;
    const appScreen = () => {
        if (!mountedScreen) {
            mountedScreen = mount(
                <PokemonItem {...props} />
            );
        }
        return mountedScreen;
    };

    beforeEach(() => {
        props = {
            pokemon: {},
            requestDetailInfo: () => {},
            handleTypeClick: () => {},
            pokemonDetail: undefined,
        };
        mountedScreen = undefined;
    });

    it("always renders a pokemon-box block", () => {
        const block = appScreen().find(".pokemon-box");
        expect(block.length).toBeGreaterThan(0);
    });

    describe('PokemonItem', () => {
        const requestFunc = jest.fn();

        beforeEach(() => {
            props = {
                pokemon: {},
                requestDetailInfo: requestFunc,
                pokemonDetail: undefined,
                handleTypeClick: () => {},
            };
        });

        it('call requestFunc after mounting if pokemonDetail is undefined', () => {
            appScreen().instance().componentDidMount();
            expect(requestFunc).toHaveBeenCalled();
        });

    });

    describe('PokemonItem', () => {
        const requestFunc = jest.fn();

        beforeEach(() => {
            props = {
                pokemon: {},
                requestDetailInfo: requestFunc,
                handleTypeClick: () => {},
                pokemonDetail: {
                    'name': 'test',
                    'sprites': {
                        'front_default': ''
                    },
                    'types': [],
                    'stats': []
                },
            };
        });

        it('do not call requestFunc after mounting if pokemonDetail is defined', () => {
            appScreen().instance().componentDidMount();
            expect(requestFunc).not.toHaveBeenCalled();
        });

    })
});