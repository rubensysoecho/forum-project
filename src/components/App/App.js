import React from 'react';
import { NavLink, HashRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='hero'>
        <header>
          <Router>
            <nav>
              <NavLink to="#">Sign in</NavLink>
              <NavLink to="#">Sign out</NavLink>
            </nav>
          </Router>
        </header>
        <div className='hero__content'>
          <div className='hero__title'>WELCOME TO OUR FORUM!!</div>
          <Router>
            <div className='hero__subtitle'>
              <NavLink to="#">Topics</NavLink>
              <NavLink to="#">Popular</NavLink>
              <NavLink to="#">Favoritos</NavLink>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
