import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";


const Card = styled.div`
    
    //display: flex;
    //align-items: center;
    /* border-style: solid;
    border-color: cyan; */
    height: 200px;
    width: 200px;
    
`

export const VideoCard = (props) => {
    
    return (
        <Card>
            <ReactPlayer width={"200px"} height={"200px"} url={props.urlVideo} light={true} />
        </Card>                
    );

}