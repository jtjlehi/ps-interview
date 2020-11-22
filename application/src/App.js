import './App.css';
import { Component } from 'react';
import Names from './names';
import Search from './search';
import { server } from './Globals'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [] };
  }
  async getJSONData() {
    const response = await fetch(server + 'names');
    const names = await response.json();
    this.setState({ names: names });
    return names;
  };
  componentDidMount() {
    this.getJSONData();
  }
  render() { 
    return ( <div className="App">
      <header>
        <Search></Search>
      </header>
      <section>
        <Names
          names={this.state.names}
        ></Names>
      </section>
    </div> );
  }
}
 
export default App;
