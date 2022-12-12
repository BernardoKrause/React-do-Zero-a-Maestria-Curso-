import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id: 1, brand: "Porshe", km: 0, color: "black", newCar: true},
    {id: 2, brand: "Ferrari", km: 233, color: "red", newCar: false},
    {id: 3, brand: "Lamborghini", km: 345, color: "blue", newCar: false},
  ]

  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
          />
          ))}
        </div>
    </div>
  );
}

export default App;
