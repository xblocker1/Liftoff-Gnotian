import React, {useState} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

function Searcher(props) {
    const [SearchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    const [images, setImages] = useState([])
    const [url, setUrl] = useState([])

    const access_token = props.token
    
    const searchArtist = async () => {
    
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${access_token}`
            },
            params: {
                q: SearchKey,
                type: "artist"
            }
        })
        setArtists(data.artists.items)

        var artistID = data.artists.items[0].id
        
        var artistTracks = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${access_token}`
                
            },
            params: {
                limit:1,
                market: 'US'
            }
        })
        
        setTracks(artistTracks.data.tracks);

        var artistImage = await axios.get(`https://api.spotify.com/v1/artists/${artistID}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            params: {
                // "url" :
                "height": 300,
                "width": 300
            }
        })
        setImages(artistImage.data.artists)

        var useUrl = await axios.get(`https://api.spotify.com/v1/artists/${artistID}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        .then((response) => {
            setUrl(response.data.external_urls);
            console.log(response.data.external_urls)
        })
    }

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
                </div>
            );
        } else {
            return null;
        }
    };

    
    return (
        <>
        <div className="SearchForm">
            <input 
                className="Name"
                type="text"
                placeholder="Search By Artist Name ..."
                onChange={(e) => {setSearchKey(e.target.value)}}
            />
            <button onClick={searchArtist}>Search</button>
            {renderArtists(0)}
        </div>
        {
            tracks.map(track => (
                <div key={track.id} >
                    <ul>
                        <li > {track.name}</li>
                    </ul>
                </div>
            ))
        }
        </>
    )
    }

export default Searcher