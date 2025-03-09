import { Link } from 'react-router-dom'
import agroTechLogo from '../assets/agriculture.svg'

import { SignIn } from '@phosphor-icons/react'

function Header() {


  return (
    <>
       <nav className="py-3 px-3 bg-secondary shadow-sm">
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={agroTechLogo} alt="Logo Agrotech" className="me-3 main-logo" />
                    <Link to="/">
                        <span className="fs-3 nav-text">Agrotech</span>
                    </Link>
                </div>
                
                <div className="d-flex align-items-center">
                    <ul className="list-unstyled m-0">
                        <li className="nav-text me-5">
                            <Link to="/contact" className="nav-text">
                                Fale Conosco
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login" className="d-flex align-items-center">
                        <span className="me-2 nav-text">Entrar</span>
                        <SignIn className="nav-text" />
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header