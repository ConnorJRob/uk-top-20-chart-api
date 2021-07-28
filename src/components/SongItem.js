import React from 'react';

const SongItem = (song) => {

    // Would we get chart position by finding out the index position of the songItem in the entry list
        // add 1 to it then display it as the chart position?

    // Don't know how to dig into song to get name within object that has a kay with : in it.

    return(
        <li>
        <h3>Title: {song["im:name"]}</h3>
        <p>By: {song["im:artist"]}</p>
        </li>
    )
}
export default SongItem;

