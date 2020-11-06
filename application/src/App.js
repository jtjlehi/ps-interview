import './App.css';
import { Component } from 'react';
import Names from './names';
import Search from './search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div className="App">
      <header>
        <Search></Search>
      </header>
      <section>
        <Names></Names>
      </section>
    </div> );
  }
}
 
export default App;
