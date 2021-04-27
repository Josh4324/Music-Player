import React, { useRef, useState } from 'react';

export const MusicPlayer = () => {
    const list = ["https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3", "https://res.cloudinary.com/josh4324/video/upload/v1610754048/Hillsong_Worship_-_So_Will_I_100_Billion_X__nicegospel.com_lixgym.mp3"]
    const [playState, setPlay] = useState(false);
    const audioRef = useRef(null);
    const play = () => {
        if (playState === true){
            audioRef.current.pause();
            setPlay(false);
        }else{
            audioRef.current.play();
            setPlay(true);
        }
       
    }

    const next = () => {
        if (list[0] === audioRef.current.src){
            audioRef.current.src = list[1]
            audioRef.current.play()
            setPlay(true);
        }else{
            audioRef.current.src = list[0];
            audioRef.current.play()
            setPlay(true);
        }
       
    }

    return (
        <>
            <audio  ref={audioRef} controls className="audio" src={list[0]}>
            Your browser does not support the
            <code>audio</code> element.</audio>
            <div className="player">

                <div className="details">
                    <div>
                        <img className="detailimage" src="https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg" />
                    </div>
                    <div className="innerdetail">
                        <span style={{ display:"block" }}>Song Title</span>
                        <span style={{ display:"block" }}>Artist Name</span>
                    </div>
                </div>

                <div className="innerPlayer">
                    <div className="play" onClick={next}><img className="svg" src="../music/svg/shuffle.svg" alt="" /></div>
                    <div className="play" onClick={next}><i className="fas step fa-step-backward"></i></div>
                    <div className="play" onClick={play}><i className="fas fa-play-circle"></i></div>
                    <div className="play" onClick={next}><i className="fas step fa-step-forward"></i></div>
                    <div className="play" onClick={next}><img className="svg" src="../music/svg/repeat.svg" alt="" /></div>
                </div>

                <div className="function">
                    <div><i className="far step fa-heart"></i></div>
                    <div><i className="fas step fa-share-alt"></i></div>
                    <div><i className="fas step fa-download"></i></div>

                </div>
               
            </div>
            
        </>
    );
}

