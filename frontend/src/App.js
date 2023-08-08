import './App.css';
import React, { useState, useEffect } from 'react';
import Searcher from './components/Searcher';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Profile from './components/Profile';
import Home from './components/Home';
import Search from './components/Search';
import LoginPage from './components/Login';
import gnotianlogo from './assets/gnotianlogo.png';
import profilepic from './assets/profilepic.png'

function App() {
  

    return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/Search' element={<Search />} />
          </Routes>
       </Layout>
      </Router>
    </>

  );

}


const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const CLIENT_ID = "42b1b2a5be1c405e906adcba3d6d1dd3"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

useEffect(() => {
  const hash = window.location.hash;
  let token = window.localStorage.getItem("token");

  if (hash && hash) {
    token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
    window.location.hash = ""
    window.localStorage.setItem("token", token)
  }
  setToken(token)
}, [])

const logout = () => {
  setToken("");
  window.localStorage.removeItem("token");
}

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
               <Search token={token} />
              </div>
      </header>
    </div>
        </li>
          
        <li className="navbar-nav ms-auto">
          <Link className="nav-link" to="/profile"> 
            <img src={profilepic} width="50px" height="50px" alt="logo" />
            <span>Profile</span>
          </Link>
        </li>

        <li className="nav-item">
          {!token ? (
          <div >
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            Login
            </a> 
          </div>
          ) : (
          <div>
            <button className="logOut"onClick={logout}>Logout</button>
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
      <Navigation/>
      {children}
    </div>
  );
};



export default App;
