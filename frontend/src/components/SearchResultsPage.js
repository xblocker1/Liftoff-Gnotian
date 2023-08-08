import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResultsPage() {
  const location = useLocation();
  const { state } = location;
  const { tracks, artists } = state;


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
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };
//       <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Review</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="form-group">
//             <label htmlFor="artist">Artist:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="artist"
//               value={newReview.artist}
//               onChange={(e) => setNewReview({ ...newReview, artist: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="body">Review:</label>
//             <textarea
//               className="form-control"
//               id="body"
//               value={newReview.body}
//               onChange={(e) => setNewReview({ ...newReview, body: e.target.value })}
//             />
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSaveReview}>
//             Save Review
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       </>

  return <div>{renderArtists(0)}</div>;
}

export default SearchResultsPage;
