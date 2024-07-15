import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import "./DefaultPage.css"
export const DefaultPage = (props) => {
    return <div>
        <Header boton = {props.boton} ></Header>
        { props.contenido}
        {/* { props.carruselFrontEnd }
        { props.carruselBackEnd }
        { props.carruselInnovacionGestion } */}
        { props.carruseles }
        <Footer></Footer>
    </div>
}