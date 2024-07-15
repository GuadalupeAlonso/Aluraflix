import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Slick.css"
import { VideoCard } from "../VideoCard/VideoCard";
import styled from "styled-components";
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebaseconfig/firebase';
import { v4 as uuidv4 } from 'uuid';


const SlideDiv = styled.div`
    //display: flex;
    //padding-top: 30px;
    
    /* border-color: cyan;    
    border-style: solid;
    margin-left: 5px; */
    height: 250px;
    /* width: 200px; */
`

export const SimpleSlider = (props) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    const [videos, setVideos] = useState([])

    const videosCollection = collection(firestore, "videos")

    const getVideos = async () => {
        const data = await getDocs(videosCollection)
        setVideos(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
    }

    useEffect( () => {
        getVideos()
    }, [] )

 
    return (
      
     

      <SlideDiv>
        
        <Slider {...settings}>
          
            {videos.map( (video) => (
                
                video.categoria===`${props.categoriaVideo}` ? 
                  <VideoCard key={uuidv4()} urlVideo={video.url_video}></VideoCard>
                  
                :                  
                  ""
                    
            ))}

        </Slider>
      </SlideDiv>
    );
  }


