import React, { Component } from 'react';
import NameComponent from './name-component'
import { server } from './Globals'

class Names extends Component {
    constructor(props) {
        super(props);
        this.state = { names: [] };
    };
    async getJSONData() {
        const response = await fetch(server + 'names');
        const names = await response.json();
        this.setState({ names: names });
        return names;
    };
    async getNames() {
        const names = await this.getJSONData();
        this.setState({
            nameComponents: names.map(
                (name) => (name.id > 0 ?
                    <NameComponent
                        name={name}
                        key={name.id}
                        onNameChange={this.nameChange}
                    ></NameComponent>
                    : undefined)
            )
        });
    };
    nameChange = async (isFavorite, id) => {
        const url = `${server}names/${id}`;
        const data = JSON.stringify({
            "isFavorite": isFavorite
        });
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
        await fetch(url, config)
    }
    async componentDidMount() {
        await this.getNames();
    };
    render() {
        return (<section>
            {this.state.nameComponents}
        </section> );
    };
};
 
export default Names;