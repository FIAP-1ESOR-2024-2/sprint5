import { PaperPlaneTilt, TelegramLogo } from "@phosphor-icons/react"

function ContactPage() {
    return (
        <>
            <div class="m-5 d-flex flex-column align-items-center">
                <div class="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <TelegramLogo class="main-logo" />

                    <form>
                        <div class="form-group my-2">
                            <label>Endereço de email</label>
                            <input
                                type="email"
                                class="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Digite seu email"
                                id="email-input"
                            />
                            <span id="email-error" class="error-message"></span><br/>
                            <small class="form-text text-muted">Nós nunca compartilharemos o seu email com ninguém.</small>
                        </div>
                        <div class="form-group my-2">
                            <label>Telefone</label>
                            <input type="phone" class="form-control" placeholder="Telefone para contato" />
                        </div>
                        <div class="form-group my-2">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Seu nome completo"
                                id="name-input"
                            />
                            <span id="name-error" class="error-message"></span>
                        </div>
                        <div class="form-group my-2">
                            <label>Estado</label>
                            <select class="form-control">
                                <option>São Paulo</option>
                                <option>Minas Gerais</option>
                                <option>Santa Catarina</option>
                                <option>Mato Grosso</option>
                            </select>
                        </div>
                        <div class="form-group my-2">
                            <label>Cidade</label>
                            <select class="form-control">
                                <option>São Paulo</option>
                                <option>Bauru</option>
                                <option>Botucatu</option>
                                <option>Bebedouros</option>
                            </select>
                        </div>
                        <div class="form-group my-2">
                            <label>O que deseja nos falar?</label>
                            <textarea
                                class="form-control"
                                rows="13"
                                id="message-input"
                            ></textarea>
                            <span id="message-error" class="error-message"></span>
                            <div id="char-count">
                                0/500
                            </div>
                        </div>
                        <div class="form-check my-2">
                            <input type="checkbox" class="form-check-input" />
                            <label class="form-check-label">Aceito receber comunicação via WhatsApp</label>
                        </div>
                        <a href="./index.html">
                            <button type="button" class="btn btn-dark my-2 d-flex align-items-center jutify-content-center">
                                <span class="me-2">Enviar</span>
                                <PaperPlaneTilt />
                            </button>
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage