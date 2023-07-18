import React from 'react'

function Profile({ username }) {

const profileData = {
    name: 'Chris Hahn',
    age: 26,
    email: 'ChrisHahn97@example.com',
  };

  const artist = ["Ed Sheeran", "The Weeknd", "Bruno Mars", "Taylor Swift", "Rihanna"]

  return (
    <>
      <div className="col-md-8 offset-md-4">
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
          <span><h2>top 5 artists</h2></span>
          {artist.map(artist => (
            <li className="list-group-item">{artist}</li>
          ))}
        </ul>
      </div>
</>
  );
};

export default Profile