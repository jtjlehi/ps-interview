import React, { Component } from 'react';
import NameComponent from './name-component'

class Names extends Component {
    constructor(props) {
        super(props);
        this.state = { names: []}
        // this.getJSONData()
    }
    getJSONData() {
        fetch('../../MOCK_DATA.json')
            .then(response => response.json)
            .then(names => this.setState({names: names}))
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