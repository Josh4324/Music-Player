import React from 'react';

export const PlayList = (props) => {
    const {playListName,image, view, musicList} = props.playList
    return (
        <div>
            <p>{playListName}</p>
            <p>{image}</p>
            <p>{view}</p>
            <p></p>
        </div>
    );
}

