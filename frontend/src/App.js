import './App.css';
import React, { useState, useEffect } from 'react';
import Searcher from './components/Searcher';

function App() {
  
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

    <div className="App">
      <header className="App-header">
        <div className="searchContainer">
          <h2>Search</h2>
            {!token ?
              <div >
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                Login
              </a> 
            </div>
          :
        <div>
        <Searcher token={token} />
        <button className="logOut"onClick={logout}>Logout</button>
        </div>
      }
      
      </div>
      </header>
    </div>

  );

}

export default App;
