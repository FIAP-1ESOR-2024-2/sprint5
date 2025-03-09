import { Link } from "react-router-dom"
import agotechLogo from "../assets/agriculture.svg"

function Footer() { 
    return (
        <>
            <div class="row p-3 bg-secondary shadow-sm mt-auto">
                <div class="col-6">
                    <div class="d-flex align-items-center">
                        <img src={agotechLogo} alt="Logo Agrotech" class="me-3 main-logo" />
                        <a href="./index.html">
                            <span class="fs-3 nav-text">Agrotech</span>
                        </a>
                    </div>
                    <p>© Copyright 2024 Agrotech</p>
                </div>
                <div class="col-4">                
                    <ul>
                        <li>
                            <Link to="/contact" class="nav-text">
                                Fale Conosco
                            </Link>
                        </li>
                        <li>
                            <Link to="*" class="nav-text">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link to="*" class="nav-text">
                                Políticas de privacidade
                            </Link>
                        </li>
                        <li>
                            <Link to="*" class="nav-text">
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