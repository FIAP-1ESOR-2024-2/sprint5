import agotechLogo from "../assets/agriculture.svg"

function Footer() { 
    return (
        <>
            <div class="row">
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
                        <li><a href="./contact.html" class="nav-text">Fale Conosco</a></li>
                        <li><a href="#" class="nav-text">Sobre nós</a></li>
                        <li><a href="#" class="nav-text">Políticas de privacidade</a></li>
                        <li><a href="#" class="nav-text">Termos de utilização</a></li>
                    </ul>
                </div>            
            </div>
        </>
    )
}

export default Footer