import { ArrowFatLeft, SignIn, UserCircle } from "@phosphor-icons/react"

function RegisterPage() {
    return (
        <>
            <div class="m-5 d-flex flex-column align-items-center">
                <div class="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <UserCircle class="main-logo" />

                    <form id="registerForm">
                        <div class="form-group my-2">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" placeholder="Email para cadastro" required />
                        </div>
                        <div class="form-group my-2">
                            <label for="confirmEmail">Confirme o Email</label>
                            <input type="email" id="confirmEmail" class="form-control" placeholder="Confirme o email" required />
                        </div>
                        <div class="form-group my-2">
                            <label for="password">Senha</label>
                            <input type="password" id="password" class="form-control" placeholder="Sua senha de acesso" required />
                        </div>
                        <div class="form-group my-2">
                            <label for="confirmPassword">Confirme a Senha</label>
                            <input type="password" id="confirmPassword" class="form-control" placeholder="Confirme a senha" required />
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                            <button type="submit" class="btn btn-dark my-2 d-flex align-items-center">
                                <span class="me-2">Registrar</span>
                                <SignIn />
                            </button>
                            <a href="./login.html" class="btn btn-warning my-2 d-flex align-items-center">
                                <span class="me-2">Voltar</span>
                                <ArrowFatLeft />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage