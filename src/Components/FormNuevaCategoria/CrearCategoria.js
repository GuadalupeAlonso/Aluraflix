import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebaseconfig/firebase';


const CrearCategoria = () => {

    const [ nombre, setNombre ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ color, setColor ] = useState('')
    
    //const navigate = useNavigate()
    
    const categoriaVideosCollection = collection(firestore, "categoria_videos")

    //PARA GUARDAR
    const store = async (e) => {
        e.preventDefault()
        await addDoc( categoriaVideosCollection, { nombre: nombre, descripcion: descripcion, color: color })
        limpiarCampos(e)
        //navigate('/nueva-categoria')
        
    }
    //PARA GUARDAR

    const limpiarCampos = (e) => {
        e.preventDefault()
        setNombre('')
        setDescripcion('')
        setColor('')
        
    }

    
    
    return (
        <div className='container'>

            <div className='row'>

                <div className='col'>
                    <h1>Crear Categoría</h1>

                    <form onSubmit={store}>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre</label>
                            <input
                                value={nombre}
                                onChange={ (e) => setNombre(e.target.value)}
                                type='text'
                                className='form-control'
                            />    
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Descripcion</label>
                            <input
                                value={descripcion}
                                onChange={ (e) => setDescripcion(e.target.value)}
                                type='text'
                                className='form-control'
                            />    
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Color</label>
                            <input
                                value={color}
                                onChange={ (e) => setColor(e.target.value)}
                                type='text'
                                className='form-control'
                            />    
                        </div>
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                        <button onClick={limpiarCampos} className='btn btn-primary'>Limpiar</button>
                    </form>


                </div>

            </div>
            
        </div>
    );
}

export default CrearCategoria;


