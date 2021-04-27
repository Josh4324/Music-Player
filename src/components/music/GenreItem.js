import React from 'react';
import {PlayList} from "./PlayList";

export const GenreItem = (props) => {
    const {id,title, playList} = props.genre
    
    return (
        <div >
            <h3 style={{ marginBottom:"0px", marginTop:"0px" }}>{title}</h3>
            <div style={{ }}>
               {playList.map((playlist) => 
                   <PlayList  key={playlist.id} playList={playlist} />
                )}
            </div>
        </div>
    );
}


