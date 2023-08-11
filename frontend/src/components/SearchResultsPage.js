import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';


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



  const renderArtists = (index) => {
    const artist = artists[index];
    if (artist) {
      return (
        <div key={artist.id}>
          {artist.images.length ? (
            <img width={"25%"} src={artist.images[0].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
          <div>{artist.name}</div>
          {tracks.map((track) => (
            <div key={track.id}>
              <ul>
                <li>{track.name}</li>
                <li>{track.uri}</li>
              </ul>
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
        // we need to send a backend request to update the user's profile
        // Check if the artist and body fields are not empty
     if (!newReview.artist || !newReview.body) {
       alert("Please fill in both the Artist and Review fields.");
       return;
     }
   
     // Add the review to the reviews state
     const updatedReviews = [...reviews, newReview];
     setReviews(reviews =>[...reviews, updatedReviews]);

     // Clear the newReview state for the next time
     setNewReview({
       artist: '',
       body: '',
       uri: '',
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
