import './App.css';
import Names from './names';
import Search from './search';

function App() {
  return (
    <div className="App">
      <header>
        <Search></Search>
      </header>
      <section>
        <Names></Names>
      </section>
    </div>
  );
}

export default App;
