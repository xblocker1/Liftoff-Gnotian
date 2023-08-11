import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

function Profile(props) {
  const { token } = useAuth();
  const access_token = token;

  const [artist, setArtists] = useState([]);
  const [ProfileData, setProfileData] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
        });

        // Update the profile data state with additional details if available
        setProfileData({
          name: data.display_name,
          image: data.images[0].url,
        });
      } catch (error) {
        console.error(error);
      }

      try {
        const { data } = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10', {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
        });

        // Extract artist names and update the artist state
        const artistNames = data.items.map(item => item.artists[0].name);
        setArtists(artistNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [access_token]);

    return (
    <>
      <div className="container text-center ">
        <h1>Profile Page</h1>
        <h2>Welcome, {ProfileData.name}!</h2>
        <div>
            <img src={ProfileData.image} width="50px" height="50px" alt="profile" />
        </div>
      </div>

      <div className="col-md-8 offset-md-2">
        <ul className="list-group">
          <span><h2>Your top 5 artists</h2></span>
          {artist.map(artist => (
            <li className="list-group-item" key={artist}>{artist}</li>
          ))}
        </ul>
      </div>

    
      </>
  );
}

export default Profile;