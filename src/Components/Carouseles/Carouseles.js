import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebaseconfig/firebase';
import { Carrusel } from "../Carousel/Carrusel/Carrusel";
import styled from "styled-components";
import "./Carruseles.css";



export const Carouseles = () => {

    const [categoriaVideos, setCategoriaVideos] = useState([])

    const categoriaVideosCollection = collection(firestore, "categoria_videos")

    const getCategoriaVideos = async () => {
        const data = await getDocs(categoriaVideosCollection)
        setCategoriaVideos(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id})) //... spread operator
        )
    }

    useEffect( () => {
        getCategoriaVideos()
    }, [] )


    return(
        <div>
            {categoriaVideos.map( (categoriaVideo) => (
                <Carrusel 
                    key={categoriaVideo.id}
                    nombre={categoriaVideo.nombre==="Front End" ? "" : categoriaVideo.nombre}
                    color={categoriaVideo.nombre==="Front End" ? "" : categoriaVideo.color}
                    descripcion={categoriaVideo.nombre==="Front End" ? "": categoriaVideo.descripcion}
                    categoriaVideo={categoriaVideo.nombre}
                />
            ))}
        </div>
    );
}