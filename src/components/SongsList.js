import React from 'react';
import SongItem from './SongItem';

const SongList = ({songs}) => {

    const SongList = songs.map((song, index) => {
        return <SongItem song={song} key={index}/>
    })

    return(
        <div>
            <ul>
                {SongList}
            </ul>
        </div>
    )
};

export default SongList;