import { Link } from "react-router-dom"
import agotechLogo from "../../assets/agriculture.svg"
import './style.css'

function Footer() { 
    return (
        <>
            <div className="row p-3 bg-secondary shadow-sm mt-auto">
                <div className="col-5">
                    <div className="d-flex align-items-center">
                        <Link to="/">
                            <img src={agotechLogo} alt="Logo Agrotech" className="me-3 main-logo" />
                            <span className="fs-3 text-color">Agrotech</span>
                        </Link>
                    </div>
                    <p className="mt-3 text-color">© Copyright 2024 Agrotech</p>
                </div>
                <div className="col-5">                
                    <ul>
                        <li>
                            <Link to="/contact" className="text-color">
                                Fale Conosco
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-color">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="text-color">
                                Políticas de privacidade
                            </Link>
                        </li>
                        <li>
                            <Link to="*" className="text-color">
                                Termos de utilização
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-2">
                     <a href="https://youtu.be/5uJvlXllWpo" target="_blank">
                         <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
                     </a>
                 </div>
            </div>
        </>
    )
}

export default Footer