import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';



import axios from 'axios';


function Search(props) {
  const { token } = useAuth();

  const navigate = useNavigate();


    const [SearchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    const [images, setImages] = useState([])
    // const [reviews, setReviews] = useState([]);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [newReview, setNewReview] = useState({
      artist: '',
      body: '',
    });

    const access_token = props.token
    

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
    };



    const handleAddReview = () => {
        setShowReviewModal(true);
      };

    const handleSaveReview = () => {
        // we need to send a backend request to update the user's profile
        // Check if the artist and body fields are not empty
     if (!newReview.artist || !newReview.body) {
       alert("Please fill in both the Artist and Review fields.");
       return;
     }
   
     // Add the review to the reviews state
    //  const updatedReviews = [...reviews, newReview];
    //  setReviews(updatedReviews);
    //  // Clear the newReview state for the next time
    //  setNewReview({
    //    artist: '',
    //    body: '',
    //  });
   
     // Close the modal after saving the review
     setShowReviewModal(false);
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