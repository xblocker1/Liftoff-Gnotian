import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Home() {

const [reviews, setReviews] = useState([]);
const [showReviewModal, setShowReviewModal] = useState(false);
const [newReview, setNewReview] = useState({
    artist: '',
    body: '',
  });

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
    <h1>Home</h1>
    <div className="col-md-8 offset-md-2">
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
      </div>

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

export default Home