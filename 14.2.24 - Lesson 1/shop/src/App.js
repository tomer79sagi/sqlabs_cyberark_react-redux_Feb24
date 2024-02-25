import './App.css';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className="center">
      <Header title="My Shop"/>
      <Home name="Tomer Sagi"/>
    </div>
  );
}

export default App;
