import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState('');

  useEffect(() => {

    const hash = window.location.hash;
    let authToken = window.localStorage.getItem("token");

    if (hash && hash.startsWith('#access_token=')) {
      authToken = hash.substring('#access_token='.length).split('&')[0];
      window.location.hash = "";
      window.localStorage.setItem("token", authToken);
    }

    setToken(authToken);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem("token");

    const navigate = useNavigate();
    navigate('/');

  };

  const contextValue = {
    token,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
