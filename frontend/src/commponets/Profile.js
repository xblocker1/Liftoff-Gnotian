import React from 'react'

function Profile({ username }) {

const profileData = {
    name: 'Chris Hahn',
    age: 26,
    email: 'ChrisHahn97@example.com',
  };

  const artist = ["Ed Sheeran", "The Weeknd", "Bruno Mars", "Taylor Swift", "Rihanna"]
 
  const reviews = [
    {
      artist: "Ed Sheeran",
      body: "Ed Sheeran is cool"
    },   
    {
      artist: "The Weeknd",
      body: "The Weeknd is cool"
    },
    {
      artist: "Bruno Mars",
      body: "Bruno Mars is cool"
    },
    {
      artist: "Taylor Swift",
      body: "Taylor Swift is cool"
    }
  ];


  
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

    <div>
      <div className="container text-center2">
        <ul className="list-group">
          <span><h2>Your top 5 artists</h2></span>
          {artist.map(artist => (
            <li className="list-group-item">{artist}</li>
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
      </div>
    </div>
</>
  );
};

export default Profile