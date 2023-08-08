import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Profile() {

  const [showEditModal, setShowEditModal] = useState(false);
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

      </>
  );
}

export default Profile;