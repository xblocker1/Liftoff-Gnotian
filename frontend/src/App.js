import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './commponets/Home';
import Profile from './commponets/Profile';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/"> Home </Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Profile"> Profile </Link>
        </li>
      </ul>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> Profile
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

