import { Link } from 'react-router-dom'
import agroTechLogo from '../assets/agriculture.svg'

import { SignIn } from '@phosphor-icons/react'

function Header() {


  return (
    <>
       <nav class="py-3 px-3 bg-secondary shadow-sm">
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex align-items-center">
                    <img src={agroTechLogo} alt="Logo Agrotech" class="me-3 main-logo" />
                    <Link to="/">
                        <span class="fs-3 nav-text">Agrotech</span>
                    </Link>
                </div>
                
                <div class="d-flex align-items-center">
                    <ul class="list-unstyled m-0">
                        <li class="nav-text me-5">
                            <Link to="/contact" class="nav-text">
                                Fale Conosco
                            </Link>
                        </li>
                    </ul>
                    <Link to="/login" class="d-flex align-items-center">
                        <span class="me-2 nav-text">Entrar</span>
                        <SignIn class="nav-text" />
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header