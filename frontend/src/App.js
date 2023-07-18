import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Profile from './commponets/Profile';
import Home from './commponets/Home';
import LoginPage from './commponets/Login';


const Navigation = ({ loggedIn, onLogout }) => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/"> 
               <img src="path" alt="logo" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile"> Profile </Link>
        </li>
        <li className="nav-item">
          {loggedIn ? (
            <button className="nav-link" onClick={onLogout}>Logout</button>
          ) : (
            <Link className="nav-link" to="/login"> Login </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

const Layout = ({ loggedIn, onLogout, children }) => {
  return (
    <div>
      <Navigation loggedIn={loggedIn} onLogout={onLogout} />
      {children}
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Layout loggedIn={loggedIn} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
