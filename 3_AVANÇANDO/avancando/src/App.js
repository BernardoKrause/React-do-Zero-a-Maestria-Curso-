import './App.css';

import Goats from './assets/goats.jpg'

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img width="600px" src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img width="600px" src={Goats} alt="Carneiros" />
      </div>
    </div>
  );
}

export default App;
