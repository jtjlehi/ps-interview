import { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
    }
    render() { 
        return (<input
            value={this.state.value}
            onChange={this.handleChange}
        ></input>);
    }
}

export default SearchBar;