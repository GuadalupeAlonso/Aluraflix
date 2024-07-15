import React, { useState, useEffect } from "react";
import { Banner } from "./Components/Banner/Banner";
import { DefaultPage } from "./Components/DefaultPage/DefaultPage";
import FormNuevoVideo from "./Components/FormNuevoVideo/FormNuevoVideo";
//import { Carrusel } from "./Components/Carousel/Carrusel/Carrusel";
import { Carouseles } from "./Components/Carouseles/Carouseles";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormNuevaCategoria from "./Components/FormNuevaCategoria/FormNuevaCategoria";
import { Boton }  from "./Components/Boton/Boton";
/* import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseconfig/firebase'; */



function App() {


  return (
    
    <Router>

      
      <Routes>
         <Route path='/' element={ 
            <DefaultPage
              boton = <Link to="/nuevo-video"><Boton nombre='Nuevo video'></Boton></Link>
              contenido = <Banner /> 
              //carruselFrontEnd =  <Carrusel carruselCategoria={{}} carruselVideos={{}}/>
              //carruselBackEnd =  <Carrusel carruselCategoria={{}} carruselVideos={{}}/>
              //carruselInnovacionGestion =  <Carrusel carruselCategoria={{}} carruselVideos={{}}/>
              carruseles =  <Carouseles/>
            /> } 
         />
         <Route path='/nuevo-video' element={ <DefaultPage contenido =  <FormNuevoVideo />  /> } />
         
         <Route path='/nueva-categoria' element={ <DefaultPage contenido =  <FormNuevaCategoria />  /> } />
         
         <Route path='/editar-categoria/:id' element={ <DefaultPage contenido = <FormNuevaCategoria /> />} />

         {/* <Route path='/videos' element={ <DefaultPage contenido =  <ListVideos />  /> } />
         <Route path='/categorias' element={ <DefaultPage contenido =  <ListCategorias />  /> } /> */}
      </Routes>

    </Router>
  );
}

export default App;
