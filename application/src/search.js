import { Component } from 'react';
import { server } from './Globals';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }
    handleChange = async (event) => {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
        await this.searchDB(this.state.value);
    }
    async searchDB(search) {
        const names = async (name) =>
            await fetch(`${server}names?${name}Name_like=${search}`)
                .then(response => response.json());
        const firstNames = await names('first');
        const lastNames = await names('last');
        const allTheNames = firstNames
            .map(name => name.id)
            .concat(lastNames.map(name => name.id))
            .sort()
            .filter((id, index, names) => names.indexOf(id) === index);
    }
    render() { 
        return (<input
            value={this.state.value}
            onChange={this.handleChange}
        ></input>);
    }
}

export default SearchBar;