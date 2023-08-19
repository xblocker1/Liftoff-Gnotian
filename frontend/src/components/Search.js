import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';



import axios from 'axios';

function Search() {
  const { token } = useAuth();
  
  const access_token = token;

  const navigate = useNavigate();

  const [SearchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [images, setImages] = useState([]);


  const fetchData = async () => {
    try {
      const searchResponse = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${access_token}`
        },
        params: {
          q: SearchKey,
          type: "artist"
        }
      });

      const artistID = searchResponse.data.artists.items[0].id;

      const [artistResponse, artistImageResponse] = await axios.all([
        axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
          headers: {
            Authorization: `Bearer ${access_token}`
          },
          params: {
            limit: 10,
            market: 'US'
          }
        }),
        axios.get(`https://api.spotify.com/v1/artists/${artistID}`, {
          headers: {
            Authorization: `Bearer ${access_token}`
          },
          params: {
            "height": 300,
            "width": 300
          }
        })
      ]);

      setArtists(searchResponse.data.artists.items);
      setTracks(artistResponse.data.tracks);
      setImages(artistImageResponse.data.artists);

      handleNavigateToResults(artistResponse.data.tracks, searchResponse.data.artists.items, artistImageResponse.data.artists);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNavigateToResults = (tracks, artists, images) => {
    navigate('/search-results', { state: { tracks, artists, images } });
  };

  return (
    <div className="SearchForm">
      <input 
        className="Name"
        type="text"
        placeholder="Search By Artist Name ..."
        onChange={(e) => {setSearchKey(e.target.value)}}
      />
      <button onClick={fetchData}>Search</button>
    </div>
  );
}

export default Search;
