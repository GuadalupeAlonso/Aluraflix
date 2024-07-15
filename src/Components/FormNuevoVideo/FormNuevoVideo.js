import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebaseconfig/firebase';
import { Boton } from "../Boton/Boton"
import { CampoTexto } from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import { Link } from "react-router-dom"
import "./FormNuevoVideo.css"

const FormNuevoVideo = (props) => {

    const [titulo,setTitulo] = useState("")
    const [urlVideo,setUrlVideo] = useState("")
    const [urlImagen,setUrlImagen] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const navigate = useNavigate()
    
    const videosCollection = collection(firestore, "videos")

    const store = async (e) => {
        e.preventDefault()
        await addDoc( videosCollection, { titulo: titulo, url_video: urlVideo, url_imagen: urlImagen, categoria: categoria, descripcion: descripcion })
        navigate('/')
    }
    const limpiarCampos = (e) => {
        e.preventDefault()
        setTitulo('')
        setUrlVideo('')
        setUrlImagen('')
        setCategoria('')
        setDescripcion('')
    }    
    
    const errorTitulo = titulo.length < 5
    const errorUrlVideo = urlVideo.length < 5
    const errorUrlImagen = urlImagen.length < 5
    const errorDescripcion = descripcion.length < 5
    


    return (
        <div className='container'>

            <div className='row'>

                <div className='col'>
                    <h1>Nuevo video</h1>

                    <form onSubmit={store}>
                        
                        <div className='mb-3'>
                            <CampoTexto 
                                placeholder="Título"
                                required={true}
                                valor={titulo}
                                type='text'
                                actualizarValor={setTitulo}
                                error = {errorTitulo}
                            />
                        </div>

                        <div className='mb-3'>
                            <CampoTexto
                                placeholder="Url Video"
                                required={true}
                                valor={urlVideo}
                                type='text'
                                actualizarValor={setUrlVideo}
                                error = {errorUrlVideo}
                            />
                        </div>

                        <div className='mb-3'>
                            <CampoTexto
                                placeholder="Url Imagen"
                                required={true}
                                valor={urlImagen}
                                type='text'
                                actualizarValor={setUrlImagen}
                                error = {errorUrlImagen}
                            />
                        </div>
                        
                        <div className='mb-3'>
                            <ListaOpciones
                                valor={categoria}
                                actualizarValor={setCategoria}
                            />
                        </div>

                        <div className='mb-3'>
                            <CampoTexto
                                placeholder="Descripción"
                                required={true}
                                valor={descripcion}
                                type='text'
                                actualizarValor={setDescripcion}
                                error = {errorDescripcion}
                            />
                        </div>
                        
                        
                        <Boton type='submit' nombre="Guardar"></Boton>
                        <Boton nombre="Limpiar" onClick={limpiarCampos} ></Boton>
                        <Link to="/nueva-categoria"><Boton nombre="Nueva categoría"></Boton></Link>
                    </form>


                </div>

            </div>
            
        </div>
    );

    
}

export default FormNuevoVideo


            