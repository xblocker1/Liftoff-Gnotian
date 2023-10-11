import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';


function SearchResultsPage() {
  const location = useLocation();
  const { token, profileData, fetchProfileData } = useAuth()
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
      const response = await axios.get('http://localhost:8080/api/reviews', {

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
        <>
        <div className="container text-center" key={artist.id}>
          <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            {artist.images.length ? (
              <img width={'25%'} src={artist.images[0].url} alt=""/>
              ) : (
              <div>No Image</div>
              )}
              <div className='artistImage'> 
                {artist.name}
              </div>
              </a>
            <br></br>              
          {tracks.map((track) => (
            <div key={track.id}>
              <br></br>
              <ul className="list-group align-items-center">
                <li className="list-group-item list-group-item-primary">{track.name}</li>
          
              </ul>

                {reviews.filter((review) => review.uri === track.uri).map((review) => (
                  <div  key={review.id}>
                <ul className="list-group align-items-center">
                  <br></br>
                  <li className="list-group-item list-group-item-secondary">Ueser: {review.artist}</li>
                  <li className="list-group-item list-group-item-secondary">Review: {review.body}</li>
                  <br></br>
                </ul>
              </div>
            ))}
            <button onClick={() => handleAddReview(track.uri, profileData.name)}>Add Review</button>
            <br></br>
            </div>
          ))}
        </div>
        </>
      );
    } else {
      return null;
    }
  };


const handleAddReview = (trackUri, profileName) => {
  setShowReviewModal(true);
  setNewReview({ ...newReview, artist: profileName, uri: trackUri });
  console.log(reviews)
};



const handleSaveReview = () => {
  if (!newReview.body) {
    alert("Please fill in both the Review fields.");
    return;
  }
  
  axios.post('http://localhost:8080/api/reviews', newReview)
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
            
             <label htmlFor="artist">Ueser: {profileData.name}</label>
             <input
              type="hidden"
              className="form-control"
              id="artist"
              value={newReview.artist}
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
