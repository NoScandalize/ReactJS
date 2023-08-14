// components
import FirstComponent from './components/FirstComponent';
import TempleteExpressions from './components/TemplateExpressions';

// style / css
import './App.css';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TempleteExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
