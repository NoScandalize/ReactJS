import './App.css';
import CarDetails from './components/CarDetails';

const carsData = [
  { brand: 'Ferrari', color: 'Branco', km: 0 },
  { brand: 'Porche', color: 'Preto', km: 34343 },
  { brand: 'Mercedes', color: 'Azul', km: 234 },
]

function App() {
  return (
    <div className="App">
      <h1 className="title">Desafio CSS</h1>
      <div className='container-app'>
      {carsData.map(({ brand, color, km }) => 
        <CarDetails brand={brand} color={color} km={km} />
      )}
      </div>
    </div>
  );
}

export default App;
