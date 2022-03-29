import React from 'react';
import { NavLink, HashRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="hero">
          <header>
            <nav>
              <NavLink to="/signin">Sign in</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
            </nav>
          </header>
          <div className="hero__content">
            <h1 className="hero__title">WELCOME TO OUR FORUM!!</h1>
            <div className="hero__links">
              <NavLink to="/topics">Topics</NavLink>
              <NavLink to="/popular">Popular</NavLink>
              <NavLink to="/favorites">Favorites</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
