import './css/App.css';
import JokeList from './jokelist'

function App() {
  return (
    <div className="App">
      <h1>Dad Joke</h1>

      <div className='Jokes'>
        <JokeList />
      </div>
    </div>
  );
}

export default App;
