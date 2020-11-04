import React, { Component } from 'react';
import NameComponent from './name-component'
import { localHost } from './Globals'

class Names extends Component {
    constructor(props) {
        super(props);
        this.state = { names: []}
    }
    getJSONData() {
        fetch(localHost + 'MOCK_DATA.json')
            .then( response => response.json() )
            .then(names => this.setState({ names: names }))
    }
    componentDidMount() {
        this.getJSONData()
    }
    render() { 
        return (<section>
            <NameComponent></NameComponent>
        </section> );
    }
}
 
export default Names;