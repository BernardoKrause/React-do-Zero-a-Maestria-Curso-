import './App.css';

import Goats from './assets/goats.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

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
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
