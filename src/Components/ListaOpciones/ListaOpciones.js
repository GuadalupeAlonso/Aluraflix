import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../firebaseconfig/firebase';


//import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const [categoriaVideos, setCategoriaVideos] = useState([])

    const categoriaVideosCollection = collection(firestore, "categoria_videos")

    const getCategoriaVideos = async () => {
        const data = await getDocs(categoriaVideosCollection)
        setCategoriaVideos(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id})) )
        
    }

    useEffect( () => {
        getCategoriaVideos()
    }, [] )
    
    const manejarCambio = (e)  => {
        props.actualizarValor(e.target.value)
    }
    return ( 
        
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Elige una categoría</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.valor}
                    //label="Categoría"
                    onChange={manejarCambio}
                    style={{backgroundColor: "rgb(36, 33, 33)",
                            color:"white"
                        }}
                    
                >
                    { categoriaVideos.map( (categoriaVideo) => 
                    <MenuItem 
                        key={ categoriaVideo.id }
                        value={ categoriaVideo.nombre }>{ categoriaVideo.nombre }
                    </MenuItem>)}
                </Select>
            </FormControl>
        </Box>


    );
}

export default ListaOpciones