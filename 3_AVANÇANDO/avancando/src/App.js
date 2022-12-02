import { useState } from 'react';
import './App.css';

import Goats from './assets/goats.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color:"Branco", newCar: false, km: 126543},
    {id: 3, brand: "Renault", color:"Azul", newCar: false, km: 234},
  ]

  const people = [
    {id: 1, name:"Marta", age: 35, profession: "programmer"},
    {id: 2, name:"Robert", age: 17, profession: "software developer"},
    {id: 3, name:"Vinicius", age: 21, profession: "soccer player"},
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km}
          newCar={car.newCar} 
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing"> 
        <p>Este é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* tarefa 4 */}
      {people.map((person) => (
        <UserDetails 
          key={person.id}
          name={person.name}
          age={person.age}
          profession={person.profession}
        />
      ))}
    </div>
  );
}

export default App;
