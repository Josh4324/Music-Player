import React from 'react';
import { HorizontalScroll } from "./HorizontalScroll";

export const GenreList = () => {
    const list = [
        {
            id: 1,
            title: "Gospel 2021",
            playList: [
                {
                    id: 1,
                    playListName: "Playlist Name",
                    image : "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
                    view: 100,
                    musicList: [
                        {
                            id: 1,
                            Artist: "Dunsin Oyekan",
                            name: "Breathe",
                            time: "11:32",
                            url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                    },
                    {
                        id: 2,
                        Artist: "Dunsin Oyekan",
                        name: "Breathe",
                        time: "11:32",
                        url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                },
                {
                    id: 3,
                    Artist: "Dunsin Oyekan",
                    name: "Breathe",
                    time: "11:32",
                    url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
            },
                    ]     
            },
            {
                id: 2,
                playListName: "Playlist Name",
                image : "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
                view: 100,
                musicList: [
                    {
                        id: 1,
                        Artist: "Dunsin Oyekan",
                        name: "Breathe",
                        time: "11:32",
                        url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                },
                {
                    id: 2,
                    Artist: "Dunsin Oyekan",
                    name: "Breathe",
                    time: "11:32",
                    url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
            },
            {
                id: 3,
                Artist: "Dunsin Oyekan",
                name: "Breathe",
                time: "11:32",
                url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
        },
                ]     
        },
            
            ],
        },
        {
            id: 2,
            title: "Gospel 2021",
            playList: [
                {
                    id:1,
                    playListName: "Playlist Name",
                    image : "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
                    view: 100,
                    musicList: [
                        {
                            id: 1,
                            Artist: "Dunsin Oyekan",
                            name: "Breathe",
                            time: "11:32",
                            url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                    },
                    {
                        id: 2,
                        Artist: "Dunsin Oyekan",
                        name: "Breathe",
                        time: "11:32",
                        url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                },
                {
                    id: 3,
                    Artist: "Dunsin Oyekan",
                    name: "Breathe",
                    time: "11:32",
                    url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
            },
                    ]     
            }
            ],
        },
        {
            id: 3,
            title: "Gospel 2021",
            playList: [
                {
                    id: 1,
                    playListName: "Playlist Name",
                    image : "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
                    view: 100,
                    musicList: [
                        {
                            id: 1,
                            Artist: "Dunsin Oyekan",
                            name: "Breathe",
                            time: "11:32",
                            url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                    },
                    {
                        id: 2,
                        Artist: "Dunsin Oyekan",
                        name: "Breathe",
                        time: "11:32",
                        url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
                },
                {
                    id: 3,
                    Artist: "Dunsin Oyekan",
                    name: "Breathe",
                    time: "11:32",
                    url: "https://res.cloudinary.com/josh4324/video/upload/v1610744353/Dunsin-Oyekan-Breathe_w8mbbt.mp3",
            },
                    ]     
            }
            ],
        },
    ]

    const data = [
        {url: "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
        title: "yes ooo",
        desc: "pkflpslpl"
        },
    {url: "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
    title: "yes 2",
    desc: "pkflpslpl"
    },
    {url: "https://res.cloudinary.com/josh4324/image/upload/v1610890684/image1_r2kaob.jpg",
    title: "yes 3",
    desc: "pkflpslpl"
    },
    ]

    const list1 = [
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100"
        },
    ]
 
    return (
        <>
          
            
           
            
        </>
    );
}

