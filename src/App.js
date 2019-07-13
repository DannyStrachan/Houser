import React from 'react';
// import axios from 'axios';
import './App.css';
import House from '../src/components/House/House';
import Header from '../src/components/Header/Header';
import { HashRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <div className="Content">
          <House />
          {/* <Link to="/" className="links">Dashboard</Link>
          <Link to="/wizard" className="links">
            <button type="button">
              Click Me!
            </button>
            Wizard
          </Link> */}
        </div>
        <div className="Display">{routes}</div>
        
      </div>
    </HashRouter>

    
  );
}

export default App;
