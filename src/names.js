import React, { Component } from 'react';
import NameComponent from './name-component'
import { localHost } from './Globals'

class Names extends Component {
    constructor(props) {
        super(props);
        this.state = { names: []}
    }
    async getJSONData() {
        const response = await fetch(localHost + 'MOCK_DATA.json');
        const names = await response.json();
        this.setState({ names: names });
        return names
    }
    async getNames() {
        const names = await this.getJSONData()
        this.setState({
            nameComponents: names.map(
                (name) => <NameComponent name={name} key={name.id}>words</NameComponent>
            )
        })
    }
    componentDidMount() {
        this.getNames()
    }
    render() { 
        return (<section>
            {this.state.nameComponents}
        </section> );
    }
}
 
export default Names;