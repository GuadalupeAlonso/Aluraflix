import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../../firebaseconfig/firebase';

const EditarCategoria = () => {

    const [ nombre, setNombre ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ color, setColor ] = useState('')
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async(e) => {
        e.preventDefault()
        const categoriaVideo = doc(firestore, "categoria_videos", id)
        const data = {nombre: nombre, descripcion: descripcion, color: color}
        await updateDoc(categoriaVideo, data)
        navigate('/')
    }

    const getCategoriaById = async (id) => {
        const categoriaVideo = await getDoc(doc(firestore, "categoria_videos", id))
        if(categoriaVideo.exists()) {
            //console.log(product.data())
            setNombre(categoriaVideo.data().nombre)
            setDescripcion(categoriaVideo.data().descripcion)
            setColor(categoriaVideo.data().color)
        } else {
            console.log('El producto no existe')
        }
    }

    useEffect( () => {
       getCategoriaById(id)
       // eslint-disable-next-line 
    }, [])

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
                    <h1>Editar Categoria</h1>

                    <form onSubmit={update}>
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
                            <label className='form-label'>Descripción</label>
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

export default EditarCategoria;
