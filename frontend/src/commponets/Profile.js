import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Profile({ username }) {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    artist: '',
    body: '',
  });
  
  
  const artist = ["Ed Sheeran", "The Weeknd", "Bruno Mars", "Taylor Swift", "Rihanna"];
  const profileData = {
    name: 'Chris Hahn',
    age: 26,
    email: 'ChrisHahn97@example.com',
  };

  const handleAddReview = () => {
    setShowModal(true);
  };

const handleSaveReview = async () => {
  try {
    // Send the new review data to the backend API endpoint
    const response = await axios.post('/api/reviews', newReview);

    // Assuming the backend responds with a success message or data
    console.log('Review saved successfully:', response.data);

    // Update the local state with the new review
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Clear the newReview state for the next time
    setNewReview({
      artist: '',
      body: '',
    });
  } catch (error) {
    // Handle errors if the POST request fails
    console.error('Error saving review:', error);
    // You can also show an error message to the user here
  } finally {
    // Close the modal after saving the review (whether successful or not)
    setShowModal(false);
  }
};


  return (
    <>
      <div className="container text-center ">
        <h1>Profile Page</h1>
        <h2>Welcome, {username}!</h2>
        <div>
          <h3>Name: {profileData.name}</h3>
          <p>Age: {profileData.age}</p>
          <p>Email: {profileData.email}</p>
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

      <div className="container text-center">
        <ul className="list-group">
          <span><h2> Your Reviews</h2></span>
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
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
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveReview}>
            Save Review
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;