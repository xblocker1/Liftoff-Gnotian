import React, {useState} from 'react'
import axios from 'axios';
import Playback from './Playback';

function Searcher(props) {
    const [SearchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    const [images, setImages] = useState([])

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
                limit:10,
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

    //     var artistImage = () => {
    //         return artists.map(artist => (
    //             <div key={artist.id}>
    //                 {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
    // //             {artist.name}
    //             </div>
    //         ))
    //     }
            }
        })
        setImages(artistImage.data.artists)

    }
    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
}

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
            {/* {renderArtists} */}
        </div>
        {
            tracks.slice(0, 1).map(track => (
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