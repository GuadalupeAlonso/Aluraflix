import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, addDoc, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { firestore } from '../../firebaseconfig/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate, useParams } from 'react-router-dom';
import { CampoTexto } from "../CampoTexto/CampoTexto"
import hexToRgba from "hex-to-rgba"
import hexToRgb from 'hex-to-rgb';


const MySwal = withReactContent(Swal)

const FormNuevaCategoria = () => {
    //1 - configuramos los hooks
    const [categoriaVideos, setCategoriaVideos] = useState([])

    //2 - referenciamos a la DB firestores
    const categoriaVideosCollection = collection(firestore, "categoria_videos")

    //3 - Funcion para mostrar TODOS los docs
    const getCategoriaVideos = async () => {
        const data = await getDocs(categoriaVideosCollection)
        //console.log(data)
        //console.log(data.docs)
        setCategoriaVideos(
            data.docs.map( (doc) => ( {...doc.data(), id:doc.id})) //... spread operator
        )
        //console.log(products)
    }


    //4 - Funcion para eliminar un doc
    const deleteCategoriaVideos = async (id) => {
        const categoriaVideosDoc = doc(firestore, "categoria_videos", id)
        await deleteDoc(categoriaVideosDoc)
        getCategoriaVideos()
    }


    //5 - Funcion de confirmacion para Sweet Alert 2
    const confirmDelete = (id) => {
        MySwal.fire({
            title: '¿Eliminar categoría?',
            text: "¿Está seguro? ¡Esta operación es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminarla!'
            }).then((result) => {
            if (result.isConfirmed) {
                //Llamamos a la función para eliminar
                deleteCategoriaVideos(id)
                MySwal.fire(
                'Eliminada!',
                'La categoría ha sido eliminada.',
                'success'
                )
            }
        })
    }


    //6 - usamos useEffect
    useEffect( () => {
        getCategoriaVideos()
        //eslint-disable-next-line
    }, [] )

    const [ nombre, setNombre ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ color, setColor ] = useState('')
    
    const [modo, setModo] = useState(true);
    
    const navigate = useNavigate()
    const {id} = useParams()
    
    //const categoriaVideosCollection = collection(firestore, "categoria_videos")

    //PARA GUARDAR
    /* const store = async (e) => {
        e.preventDefault()
        await addDoc( categoriaVideosCollection, { nombre: nombre, descripcion: descripcion, color: color })
        limpiarCampos(e)
        //navigate('/nueva-categoria')
        getCategoriaVideos()
        
    } */
    //PARA GUARDAR

    const limpiarCampos = (e) => {
        e.preventDefault()
        setNombre('')
        setDescripcion('')
        setColor('')
        
    }

    // PARA ACTUALIZAR
    /* const update = async(e) => {
        e.preventDefault()
        const categoriaVideo = doc(firestore, "categoria_videos", id)
        const data = {nombre: nombre, descripcion: descripcion, color: color}
        await updateDoc(categoriaVideo, data)
        navigate('/')
    } */

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
       //setEsNuevo(!esNuevo);
       // eslint-disable-next-line
       //setModo(modo)
       // eslint-disable-next-line 
    }, [])
    // PARA ACTUALIZAR

    const cambiarModo = async (e, id) => {
    //console.log(`estado anterior: ! ${modo}`)
    setModo(!modo);
    
        
  };

    // ELECCION DE CREAR O ACTUALIZAR DATOS
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(modo){
            
            //e.preventDefault()
            await addDoc( categoriaVideosCollection, { nombre: nombre, descripcion: descripcion, color: color })
            limpiarCampos(e)
            //navigate('/')
            getCategoriaVideos()        
    
        } else {
            //e.preventDefault()
            
            const categoriaVideo = doc(firestore, "categoria_videos", id)
            const data = {nombre: nombre, descripcion: descripcion, color: color}
            await updateDoc(categoriaVideo, data)
            //navigate('/')
            limpiarCampos(e)
            getCategoriaVideos()
            
        }
        

    }
    // ELECCION DE CREAR O ACTUALIZAR DATOS

    

    //7 - devolvemos vista de nuestro componente
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className="d-grid gp-2">                            

                           {/* <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>  */}
                            <div className='container'>

                                <div className='row'>

                                    <div className='col'>
                                        <h1>{modo ? 'Crear Categoría' : 'Editar Categoría'}</h1>

                                        <form onSubmit={handleSubmit} >
                                            <div className='mb-3'>
                                                <CampoTexto 
                                                    placeholder="Nombre"
                                                    required={true}
                                                    valor={nombre}
                                                    type='text'
                                                    actualizarValor={setNombre}
                                                />    
                                            </div>
                                            <div className='mb-3'>
                                                <CampoTexto 
                                                    placeholder="Descripción"
                                                    required={true}
                                                    valor={descripcion}
                                                    type='text'
                                                    actualizarValor={setDescripcion}
                                                />    
                                            </div>
                                            <div className='mb-3'>
                                                <CampoTexto 
                                                    placeholder="Color"
                                                    required={true}
                                                    valor={color}
                                                    type='color'
                                                    actualizarValor={setColor}
                                                />   
                                            </div>
                                            <button type='submit' className='btn btn-primary'>{modo ? 'Guardar' : 'Actualizar'}</button>
                                            <button onClick={limpiarCampos} className='btn btn-primary'>Limpiar</button>
                                        </form>


                                    </div>

                                </div>
            
                        </div>
                           

                        </div>

                        <table className='table table-dark table-hover'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categoriaVideos.map( (categoriaVideo) => (
                                    <tr key={categoriaVideo.id}>
                                        <td>{categoriaVideo.nombre}</td>
                                        <td>{categoriaVideo.descripcion}</td>
                                        
                                        <td>
                                            <Link to={`/editar-categoria/${categoriaVideo.id}`} className="btn btn-light" onClick={cambiarModo}><i className="fa-solid fa-pencil"></i></Link>
                                            <button onClick={ () => {confirmDelete(categoriaVideo.id)} } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>


                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}

export default FormNuevaCategoria;
