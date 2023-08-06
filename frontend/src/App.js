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
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import Profile from './commponets/Profile';
// import Home from './commponets/Home';
// import Search from './commponets/Search';
// import LoginPage from './commponets/Login';
// import gnotianlogo from './assets/gnotianlogo.png';
// import profilepic from './assets/profilepic.png'


// const Navigation = ({ loggedIn, onLogout }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Perform the search functionality here (e.g., fetch data based on searchQuery)
//     // Optionally, redirect to the search results page using React Router if needed.
//   };

//   return (
//     <nav>
//       <ul className="nav ms-auto">
//         <li className="nav-item">
//           <Link className="nav-link" to="/"> 
//             <img src={gnotianlogo} width="50px" height="50px" alt="logo" />
//             <span>Gnotian</span>
//           </Link>
//         </li>

//         <li className="navbar-nav ms-auto">
//           <form className="d-flex" onSubmit={handleSearchSubmit}>
//             <input
//               type='text'
//               className='form-control me-2'
//               placeholder='Search'
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//             {/* You can add a button to submit the search form if needed */}
//             {/* <button type="submit" className="btn btn-outline-success">Search</button> */}
//           </form>
//         </li>
          
//         <li className="navbar-nav ms-auto">
//           <Link className="nav-link" to="/profile"> 
//             <img src={profilepic} width="50px" height="50px" alt="logo" />
//             <span>Profile</span>
//           </Link>
//         </li>

//         <li className="nav-item">
//           {loggedIn ? (
//             <button className="nav-link" onClick={onLogout}>Logout</button>
//           ) : (
//             <Link className="nav-link" to="/login"> Login </Link>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };


// const Layout = ({ loggedIn, onLogout, children }) => {
//   return (
//     <div>
//       <Navigation loggedIn={loggedIn} onLogout={onLogout} />
//       {children}
//     </div>
//   );
// };

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

//   return (
//     <Router>
//       <Layout loggedIn={loggedIn} onLogout={handleLogout}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//           <Route path='/Search' element={<Search />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;
