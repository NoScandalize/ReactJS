import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { HookUserContext } from './components/HookUseContext';

// pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <HookUserContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        </BrowserRouter>
      </HookUserContext>
    </div>
  );
}

export default App;
