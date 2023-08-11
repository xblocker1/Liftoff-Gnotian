import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';



import axios from 'axios';


function Search() {

  const { token } = useAuth();

  const navigate = useNavigate();

    const [SearchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    const [images, setImages] = useState([])

    const access_token = token
    

    const searchArtist = async () => {

        try {
          const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
              'Content-Type': "application/json",
              'Authorization': `Bearer ${access_token}`
            },
            params: {
              q: SearchKey,
              type: "artist"
            }
          });
          setArtists(data.artists.items);
      
          var artistID = data.artists.items[0].id;
      
          var artistTracks = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
            headers: {
              Authorization: `Bearer ${access_token}`
            },
            params: {
              limit: 10,
              market: 'US'
            }
          });
          setTracks(artistTracks.data.tracks);
      
          var artistImage = await axios.get(`https://api.spotify.com/v1/artists/${artistID}`, {
            headers: {
              Authorization: `Bearer ${access_token}`
            },
            params: {
              "height": 300,
              "width": 300
            }
          });
          setImages(artistImage.data.artists);
      
          handleNavigateToResults(artistTracks.data.tracks, data.artists.items, artistImage.data.artists);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      
    };
  

    const handleNavigateToResults = (tracks, artists, images) => {
      navigate('/search-results', { state: { tracks, artists, images } });
      console.log(access_token)
    };


  return (

        <div className="SearchForm">
            <input 
                className="Name"
                type="text"
                placeholder="Search By Artist Name ..."
                onChange={(e) => {setSearchKey(e.target.value)}}
            />
            <button onClick={searchArtist}>Search</button>
        </div>
        

  )
}

export default Search