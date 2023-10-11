import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

function Profile() {
  const { token, profileData, fetchProfileData } = useAuth();

  console.log("before", token)

  const [artists, setArtists] = useState([]);

  useEffect(() => {

     if(!profileData.name){
       fetchProfileData(); 
    }

    if(!artists.length) {
    fetchArtistsData()
    }

  }, []);


const fetchArtistsData = async () => {

  console.log("fetchArtistsData", token)
      try {
            const artistResponse = await axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
  
        });

        // Extract artist names and update the artist state

        const artistNames = artistResponse;
        setArtists(artistNames);
      } catch (error) {
        console.error(error);
        // setArtists(['Imagine Dragons', 'Mumford & Sons', 'Sara Bareilles', 'Eminem', 'The Lumineers'])
      }
    };


  

  return (
    <>
      <div className="container text-center">
        <h1>Profile Page</h1>
        <h2>Welcome, {profileData.name}!</h2>
        <div>
          <img src={profileData.image} width="50px" height="50px" alt="profile" />
        </div>
      </div>

      <div className="col-md-8 offset-md-2">
        <ul className="list-group">
          <span><h2>Your top 5 artists</h2></span>
          {artists.map(artist => (
            <li className="list-group-item" key={artist}>{artist}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Profile;
