import logo from "../../imgs/logo.png"
import "./Header.css"

export const Header = (props) => {
    return <div className="header">
        <img src={logo} alt="Logo AluraFlix" />
        
        {props.boton}
        
                
    </div>
}