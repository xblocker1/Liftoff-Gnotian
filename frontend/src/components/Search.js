import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import axios from 'axios';


function Search(props) {

    const [SearchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    const [images, setImages] = useState([])
    const [reviews, setReviews] = useState([]);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [newReview, setNewReview] = useState({
      artist: '',
      body: '',
    });

    const access_token = props.token

const searchArtist = async () => {
    
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${access_token}`
            },
            params: {
                q: SearchKey,
                type: "artist"
            }
        })
        setArtists(data.artists.items)

        var artistID = data.artists.items[0].id
        
        var artistTracks = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${access_token}`
                
            },
            params: {
                limit:10,
                market: 'US'
            }
        })
        setTracks(artistTracks.data.tracks);

        var artistImage = await axios.get(`https://api.spotify.com/v1/artists/${artistID}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            params: {
                // "url" :
                "height": 300,
                "width": 300
            }
        })
        setImages(artistImage.data.artists)
    
    }

    const renderArtists = (index) => {
            const artist = artists[index];
            if (artist) {
                return (
                <div key={artist.id}>
                    {artist.images.length ? (<img width={"50%"} src={artist.images[0].url} alt=""/> ):( <div>No Image</div>
                    )}
                <div>{artist.name}</div>
                </div>
            );
        } else {
            return null;
        }
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
     const updatedReviews = [...reviews, newReview];
     setReviews(updatedReviews);
   
     // Clear the newReview state for the next time
     setNewReview({
       artist: '',
       body: '',
     });
   
     // Close the modal after saving the review
     setShowReviewModal(false);
   };

  return (
    <>
 {/* <div className="col-md-8 offset-md-2">
        <ul className="list-group">
          <span><h2>Reviews</h2></span>
          {reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              <h4>Artist: {review.artist}</h4>
              <p>{review.body}</p>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={handleAddReview}>
          Add Review
        </button>
      </div> */}


        <div className="SearchForm">
            <input 
                className="Name"
                type="text"
                placeholder="Search By Artist Name ..."
                onChange={(e) => {setSearchKey(e.target.value)}}
            />
            <button onClick={searchArtist}>Search</button>
            {renderArtists(0)}
        </div>
        {
            tracks.map(track => (
                <div key={track.id} >
                    <ul>
                        <li > {track.name}</li>
                    </ul>
                    
                </div>
            ))
        }
    

      <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              className="form-control"
              id="artist"
              value={newReview.artist}
              onChange={(e) => setNewReview({ ...newReview, artist: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Review:</label>
            <textarea
              className="form-control"
              id="body"
              value={newReview.body}
              onChange={(e) => setNewReview({ ...newReview, body: e.target.value })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveReview}>
            Save Review
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Search