import React from "react";
import styled from "styled-components";
import { SimpleSlider } from "../Slider/Slick";



const DivCarrusel = styled.div`
    /* margin: 0 auto; */
    /* display: flex;
    justify-content: space-between; */
    margin: 20px auto;
    /* padding: 40px; */
    //padding: 0;
    width: 95%;
    background: black;
    
`

const Titulo = styled.div`
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: left;
    display: inline-block;
    padding: 5px 5px;
        
`

const Descripcion = styled.div`
    color: grey;
    font-size: 1em;
    margin-left: 0.5rem;
    text-align: left;
    display: inline-block;       
`


export const Carrusel = (props) => {

    
    return(
        <DivCarrusel>
            <Titulo style={{background: `${props.color}`}}>{props.nombre}</Titulo>
            <Descripcion>{props.descripcion}</Descripcion>
            <SimpleSlider categoriaVideo={props.categoriaVideo}>
                
            </SimpleSlider>
        </DivCarrusel>
    );
}
