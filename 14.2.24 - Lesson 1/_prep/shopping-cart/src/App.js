import './App.css';
import Home from './components/home';
import PageHeader from './components/pageHeader';

function App() {
  return (
    <div className="App">
      <PageHeader title="Shopping cart"/>
      <Home/>
    </div>
  );
}

export default App;
