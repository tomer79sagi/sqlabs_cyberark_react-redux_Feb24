import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Learning from './components/learning/Learning';
import FormsMain from './components/forms/FormsMain';
import Login from './components/auth/Login';

function App() {
  return (

    <BrowserRouter>

      <nav className="horizontal-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/forms">Forms</Link></li>
          <li><Link to="/learning">Learning</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/learning" element={ <Learning/> }/>
        <Route path="/forms" element={ <FormsMain/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/" element={ <Main/> }/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
