import React, { Component } from 'react';
import {func} from 'prop-types';
import {DebounceInput} from 'react-debounce-input';

class SearchBox extends Component {
    static propTypes = {
        handlePokemonInput: func.isRequired,
    };

    state = {
        value: ''
    };

    handleInput = (e) => {
        let value = e.target.value;
        this.setState({
            value: value
        });
        this.props.handlePokemonInput(value);
    };

    render() {
        return (
            <DebounceInput
                debounceTimeout={300}
                onChange={e => this.handleInput(e)}
                placeholder="Input pokemon name"
            />
        );
    }
}

export default SearchBox;
