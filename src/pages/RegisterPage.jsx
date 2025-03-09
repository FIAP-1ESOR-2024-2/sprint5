import { ArrowFatLeft, SignIn, UserCircle } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function RegisterPage() {
    return (
        <>
            <div className="m-5 d-flex flex-column align-items-center">
                <div className="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <UserCircle className="main-logo" />

                    <form id="registerForm">
                        <div className="form-group my-2">
                            <label for="email">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="Email para cadastro" required />
                        </div>
                        <div className="form-group my-2">
                            <label for="confirmEmail">Confirme o Email</label>
                            <input type="email" id="confirmEmail" className="form-control" placeholder="Confirme o email" required />
                        </div>
                        <div className="form-group my-2">
                            <label for="password">Senha</label>
                            <input type="password" id="password" className="form-control" placeholder="Sua senha de acesso" required />
                        </div>
                        <div className="form-group my-2">
                            <label for="confirmPassword">Confirme a Senha</label>
                            <input type="password" id="confirmPassword" className="form-control" placeholder="Confirme a senha" required />
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <Link to="/" className="btn btn-dark my-2 d-flex align-items-center">
                                <span className="me-2">Registrar</span>
                                <SignIn />
                            </Link>
                            <Link to="/login" className="btn btn-warning my-2 d-flex align-items-center">
                                <span className="me-2">Voltar</span>
                                <ArrowFatLeft />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage