import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState('');
  const [profileData, setProfileData] = useState({
    name: "",
    image: "",
  });


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

    const fetchProfileData = async () => {
    try {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log(data)
      // Update the profile data state with additional details if available
      setProfileData({
        name: data.display_name,
        image: data.images[0].url,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken('');
    setProfileData({
        name: '',
        image: '',
      });
    window.localStorage.removeItem("token");

  };

const contextValue = {
    token,
    profileData,
    fetchProfileData, 
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
