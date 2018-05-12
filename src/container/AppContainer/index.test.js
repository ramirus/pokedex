import React from "react";
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {AppContainer} from './index';

configure({ adapter: new Adapter() });

describe("AppContainer", () => {
    let props;
    let mountedScreen;
    const appScreen = () => {
        if (!mountedScreen) {
            mountedScreen = mount(
                <AppContainer {...props} />
            );
        }
        return mountedScreen;
    };

    beforeEach(() => {
        props = {
            handlePokemonInput: () => {},
            removeType: () => {},
            requestDetailInfo: () => {},
            handleTypeClick: () => {},
            pokemonsReducer: {}
        };
        mountedScreen = undefined;
    });

    it("always renders a App", () => {
        const block = appScreen().find(".App");
        expect(block.length).toBeGreaterThan(0);
    });
    it("do not render a typeName if typeName is not in props", () => {
        const block = appScreen().find(".type-name");
        expect(block.length).toBe(0);
    });

    describe('AppContainer', () => {
        const removeFunc = jest.fn();

        beforeEach(() => {
            props = {
                pokemonsReducer: {
                    typeName: 'test'
                },
                handlePokemonInput: () => {},
                removeType: removeFunc,
                requestDetailInfo: () => {},
                handleTypeClick: () => {},
            }
        });

        it("always render a typeName if typeName in props", () => {
            const block = appScreen().find(".type-name");
            expect(block.length).toBeGreaterThan(0);
        });

        it('call prop function after type label click', () => {
            const label = appScreen().find(".type-name");
            label.simulate('click');
            expect(removeFunc).toHaveBeenCalled();
        });


    })
});