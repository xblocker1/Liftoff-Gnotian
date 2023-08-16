import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import axios from 'axios';


function SearchResultsPage() {
  const location = useLocation();
  const { state } = location;
  const { tracks, artists } = state;
    const [reviews, setReviews] = useState([]);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [newReview, setNewReview] = useState({
      artist: '',
      body: '',
      uri: ''
    });

    useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://example.com/api/reviews', {
        headers: {
          // Any custom headers you need
        },
      });

      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);




  const renderArtists = (index) => {
    const artist = artists[index];
    if (artist) {
      return (
        <div key={artist.id}>
          <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            {artist.images.length ? (
              <img width={'50%'} src={artist.images[0].url} alt=""/>
              ) : (
              <div>No Image</div>
              )}
              <div>
                {artist.name}
              </div>
              </a>
          {tracks.map((track) => (
            <div key={track.id}>
              <ul>
                <li>{track.name}</li>
              </ul>
                {reviews.filter((review) => review.uri === track.uri).map((review) => (
              <div key={review.id}>
                <p>Artist: {review.artist}</p>
                <p>Review: {review.body}</p>
              </div>
            ))}
              <button onClick={() => handleAddReview(track.uri, artists[0].name)}>Add Review</button>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };


const handleAddReview = (trackUri, artistName) => {
  setShowReviewModal(true);
  setNewReview({ ...newReview, artist: artistName, uri: trackUri });
};



const handleSaveReview = () => {
  if (!newReview.body) {
    alert("Please fill in both the Artist and Review fields.");
    return;
  }
  
  axios.post('https://example.com/api/reviews', newReview)
  .then(response => {
    // Handle success, e.g., update state or show a success message
        setReviews([...reviews, newReview]);
        console.log('Review saved successfully:', response.data);
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error saving review:', error);
      });

  // Clear the newReview state for the next time
  setNewReview({
    artist: "",
    body: "",
    uri: "",
  });

  // Close the modal after saving the review
  setShowReviewModal(false);
};


   
  return (
  <>
    <div>{renderArtists(0)}</div>

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
              placeholder={artists[0].name}
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
          <div>
            <label htmlFor="uri"></label>
            <input type='hidden' id='uri' value={newReview.uri} ></input>
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

export default SearchResultsPage;
