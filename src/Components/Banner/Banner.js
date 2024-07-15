import "./Banner.css"
import player from "../../imgs/player.png"

export const Banner = () => {
    return <div className="banner-container">
        <div className="banner-titulos">
            <div className="banner-titulo">
                <div>
                    <h1>Front End</h1>
                </div>
                <h2>Challenge React</h2>
                <button>Ver</button>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className="banner-imagen">
                <img src={player} alt="Imagen título" />
            </div>
        </div>
    </div>
}