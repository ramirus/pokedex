import React from "react";
import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import SearchBox from './index';

configure({ adapter: new Adapter() });

describe("SearchBox", () => {
    let props;
    let mountedScreen;
    const appScreen = () => {
        if (!mountedScreen) {
            mountedScreen = mount(
                <SearchBox {...props} />
            );
        }
        return mountedScreen;
    };

    beforeEach(() => {
        props = {
            handlePokemonInput: () => {},
        };
        mountedScreen = undefined;
    });

    it("always renders a input", () => {
        const block = appScreen().find("input");
        expect(block.length).toBeGreaterThan(0);
    });

    describe('searchBox', () => {
        const submitFunc = jest.fn();

        beforeEach(() => {
            props.handlePokemonInput = submitFunc;
        });

        it('input change', () => {
            jest.useFakeTimers();
            const input = appScreen().find("input");
            const message = 'Test message';
            input.simulate('change', { target: { value: message } });
            setTimeout(() => {
                expect(appScreen().state('value')).toEqual(message);
            }, 500);
            jest.runAllTimers();
        });

        it('input call prop function', () => {
            jest.useFakeTimers();
            const input = appScreen().find("input");
            const message = 'Test message';
            input.simulate('change', { target: { value: message } });

            setTimeout(() => {
                expect(submitFunc).toHaveBeenCalled();
            }, 500);
            jest.runAllTimers();
        });

        it('clean input after remove button click', () => {
            jest.useFakeTimers();
            const button = appScreen().find(".search-input-clean");
            const input = appScreen().find("input");
            const message = 'Test message';
            input.simulate('change', { target: { value: message } });
            setTimeout(() => {
                expect(appScreen().state('value')).toEqual(message);
            }, 500);
            button.simulate('click');
            expect(appScreen().state('value')).toEqual('');
            jest.runAllTimers();
        });
    })
});