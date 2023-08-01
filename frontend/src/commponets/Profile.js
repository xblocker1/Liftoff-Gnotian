import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Profile() {

  const [showEditModal, setShowEditModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    artist: '',
    body: '',
  });

  const [editedProfileData, setEditedProfileData] = useState({
    name: "Chris",
    age: 26,
    email: "ChrisHahn97@example.com",
  });

  const artist = ["Ed Sheeran", "The Weeknd", "Bruno Mars", "Taylor Swift", "Rihanna"];


  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleSaveEditedProfile = () => {

    // we need to send a backend request to update the user's profile

    setEditedProfileData({
      name: editedProfileData.name,
      age: editedProfileData.age,
      email: editedProfileData.email,
    });

    setShowEditModal(false);
    
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
      <div className="container text-center ">
        <h1>Profile Page</h1>
        <h2>Welcome, {editedProfileData.name}!</h2>
        <div>
          <p>Age: {editedProfileData.age}</p>
          <p>Email: {editedProfileData.email}</p>
          <button className="btn btn-primary" onClick={handleEditProfile}>
            Edit Profile
          </button>
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

   <div className="col-md-8 offset-md-2">
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

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={editedProfileData.name}
              onChange={(e) => setEditedProfileData({ ...editedProfileData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              className="form-control"
              id="age"
              value={editedProfileData.age}
              onChange={(e) => setEditedProfileData({ ...editedProfileData, age: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">email:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={editedProfileData.email}
              onChange={(e) => setEditedProfileData({ ...editedProfileData, email: e.target.value })}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEditedProfile}>
            Save Profile
          </Button>
        </Modal.Footer>
      </Modal>



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
  );
}

export default Profile;