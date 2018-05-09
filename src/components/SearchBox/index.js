import React, { Component } from 'react';

class SearchBox extends Component {
    state = {
        value: ''
    };

    render() {
        return (
            <input
                type="text"
                onChange={this.handleInput}
                value={this.state.inputValue}
                placeholder="Input pokemon name"
            />
        );
    }
}

export default SearchBox;
