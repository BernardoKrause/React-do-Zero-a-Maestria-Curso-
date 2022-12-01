import { useState } from 'react';
import './App.css';

import Goats from './assets/goats.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color:"Branco", newCar: false, km: 126543},
    {id: 3, brand: "Renault", color:"Azul", newCar: false, km: 234},
  ]

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
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km}
          newCar={car.newCar} 
        />
      ))}
    </div>
  );
}

export default App;
