import { useState } from 'react';
import './App.css';

import Goats from './assets/goats.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")

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
      <ShowUserName name={userName} />
    </div>
  );
}

export default App;
