import React, { Component } from 'react';
import {func} from 'prop-types';
import {DebounceInput} from 'react-debounce-input';

import './index.scss';

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

    handleCleanInput = (e) => {
        e.preventDefault();
        this.setState({
            value: ''
        });
        this.props.handlePokemonInput('');
    };

    render() {
        return (
            <div className="search-box">
                <DebounceInput
                    debounceTimeout={300}
                    onChange={e => this.handleInput(e)}
                    value={this.state.value}
                    placeholder="Input pokemon name"
                />
                <a
                    onClick={(e) => this.handleCleanInput(e)}
                    className="search-input-clean"
                    role="button"
                    href="#"
                >x</a>
            </div>

        );
    }
}

export default SearchBox;
