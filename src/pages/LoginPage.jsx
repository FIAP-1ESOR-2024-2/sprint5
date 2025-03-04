import { Link } from "react-router-dom"
import { Keyhole, SignIn } from "@phosphor-icons/react"

function LoginPage() {
    return (
        <>
            <div class="m-5 d-flex flex-column align-items-center">
            
                <div class="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <Keyhole class="main-logo" />

                    <form>
                        <div class="form-group my-2">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="Email cadastrado" id="emailLogin" />
                        </div>
                        <div class="form-group my-2">
                            <label>Senha</label>
                            <input type="password" class="form-control" placeholder="Sua senha de acesso" id="senhaLogin" />
                        </div>            
                            <button id="btnEntrar" type="button" class="btn btn-dark my-2 d-flex align-items-center jutify-content-center">
                                <span class="me-2">Entrar</span>
                                <SignIn />
                            </button>               

                        <div class="form-group mt-4 mb-2">
                            <Link to="/register">
                                Ainda não é cadastrado? Se cadastre aqui!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage