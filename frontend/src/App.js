import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext';
import { useAuth } from './components/AuthContext';

import Profile from './components/Profile';
import Home from './components/Home';
import Search from './components/Search';
import SearchResultsPage from './components/SearchResultsPage';
import gnotianlogo from './assets/gnotianlogo.png';
import profilepic from './assets/profilepic.png';

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

const Navigation = () => {
  const { token, logout, profileData } = useAuth(); 
  
  const CLIENT_ID = "42b1b2a5be1c405e906adcba3d6d1dd3"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"


  return (
    <nav>
      <ul className="nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <img src={gnotianlogo} width="50px" height="50px" alt="logo" />
            <span>Gnotian</span>
          </Link>
        </li>

        <li className="navbar-nav ms-auto">
          <div className="App">
            <header className="App-header">
              <div className="searchContainer">
                <Search />
              </div>
            </header>
          </div>
        </li>

        <li className="navbar-nav ms-auto">
          <Link className="nav-link" to="/profile">
            {!token ? (
              <div>
              <img src={profilepic} width="50px" height="50px"/>
              <span>Profile</span>
              </div>
            ) : (
              <div>
            <img src={profileData.image} width="50px" height="50px"/>
            <span>{profileData.name}</span>
            </div>
            )}
          </Link>
        </li>

        <li className="nav-item">
          {!token ? (
            <div>
                 <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login
              </a>
            </div>
          ) : (
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          )}
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

export default App;
