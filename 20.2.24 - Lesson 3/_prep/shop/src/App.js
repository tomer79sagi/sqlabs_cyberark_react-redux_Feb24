import './App.css';
import FormsMain from './components/forms/FormsMain';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Learning from './components/learning/Learning';
import APIMain from './components/api/APIMain';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="horizontal-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/forms">Forms</Link></li>
            <li><Link to="/learning">Learning</Link></li>
            <li><Link to="/api">API</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/learning" element={<Learning />} />
          <Route path="/forms" element={<FormsMain />} />
          <Route path="/api" element={<APIMain />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
