import { Link } from "react-router-dom"
import agotechLogo from "../assets/agriculture.svg"

function Footer() { 
    return (
        <>
            <div className="row p-3 bg-secondary shadow-sm mt-auto">
                <div className="col-6">
                    <div className="d-flex align-items-center">
                        <img src={agotechLogo} alt="Logo Agrotech" className="me-3 main-logo" />
                        <a href="./index.html">
                            <span className="fs-3 nav-text">Agrotech</span>
                        </a>
                    </div>
                    <p>© Copyright 2024 Agrotech</p>
                </div>
                <div className="col-4">                
                    <ul>
                        <li>
                            <Link to="/contact" className="nav-text">
                                Fale Conosco
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="nav-text">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="nav-text">
                                Políticas de privacidade
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="nav-text">
                                Termos de utilização
                            </Link>
                        </li>
                    </ul>
                </div>            
            </div>
        </>
    )
}

export default Footer