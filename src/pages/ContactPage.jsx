import { PaperPlaneTilt, TelegramLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function ContactPage() {
    return (
        <>
            <div className="m-5 d-flex flex-column align-items-center">
                <div className="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
                    <TelegramLogo className="main-logo" />

                    <form>
                        <div className="form-group my-2">
                            <label>Endereço de email</label>
                            <input
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Digite seu email"
                                id="email-input"
                            />
                            <span id="email-error" className="error-message"></span><br/>
                            <small className="form-text text-muted">Nós nunca compartilharemos o seu email com ninguém.</small>
                        </div>
                        <div className="form-group my-2">
                            <label>Telefone</label>
                            <input type="phone" className="form-control" placeholder="Telefone para contato" />
                        </div>
                        <div className="form-group my-2">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Seu nome completo"
                                id="name-input"
                            />
                            <span id="name-error" className="error-message"></span>
                        </div>
                        <div className="form-group my-2">
                            <label>Estado</label>
                            <select className="form-control">
                                <option>São Paulo</option>
                                <option>Minas Gerais</option>
                                <option>Santa Catarina</option>
                                <option>Mato Grosso</option>
                            </select>
                        </div>
                        <div className="form-group my-2">
                            <label>Cidade</label>
                            <select className="form-control">
                                <option>São Paulo</option>
                                <option>Bauru</option>
                                <option>Botucatu</option>
                                <option>Bebedouros</option>
                            </select>
                        </div>
                        <div className="form-group my-2">
                            <label>O que deseja nos falar?</label>
                            <textarea
                                className="form-control"
                                rows="13"
                                id="message-input"
                            ></textarea>
                            <span id="message-error" className="error-message"></span>
                            <div id="char-count">
                                0/500
                            </div>
                        </div>
                        <div className="form-check my-2">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">Aceito receber comunicação via WhatsApp</label>
                        </div>
                        <Link to="/">
                            <button type="button" className="btn btn-dark my-2 d-flex align-items-center jutify-content-center">
                                <span className="me-2">Enviar</span>
                                <PaperPlaneTilt />
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactPage