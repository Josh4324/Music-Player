import React from 'react';
import { Layout } from "../layout";
import { HorizontalScroll, MusicPlayer } from "./index";



export const Home = () => {

    const list1 = [
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 9,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 8,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 7,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 6,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 5,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 1,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 2,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 3,
        },
        {
            img: "https://res.cloudinary.com/josh4324/image/upload/v1613569032/music_vbeczu.jpg",
            alt: "image",
            title: "Top 100",
            key: 4,
        },
    ]

    return (
        <>
          <Layout>
              <div  style={{ backgroundColor: "#121212", padding:"10px", color:"white" }}>
                    <HorizontalScroll  data={list1} height={200} width={200} headertitle="Editors Pick"  /> 
                    <HorizontalScroll  data={list1} height={200} width={200} headertitle="Hot List"  /> 
                    <HorizontalScroll  data={list1} height={200} width={200} headertitle="Download for Free"  /> 
              </div>

              <MusicPlayer />
         </Layout>  
        </>
    );
}


