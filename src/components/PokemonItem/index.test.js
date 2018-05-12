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
            pokemonDetail: {},
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
                pokemonDetail: {},
            };
        });

        it('call requestFunc after mounting', () => {
            appScreen().instance().componentDidMount();
            expect(requestFunc).toHaveBeenCalled();
        });

    })
})
;