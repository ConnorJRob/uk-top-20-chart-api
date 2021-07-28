import React, {useState, useEffect} from 'react';
import SongList from '../components/SongsList';

const SongsContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs['feed']['entry']))
    }

    return(
        <div className="main-container">
        <h2>Top 20 Tracks</h2>
        <SongList songs={songs}/>
        </div>
    )
};

export default SongsContainer;