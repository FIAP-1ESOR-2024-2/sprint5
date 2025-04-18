import { Link } from "react-router-dom";
import { Keyhole, SignIn } from "@phosphor-icons/react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    function decodeJWT(token) {
        const base64Url = token.split('.')[1]; 
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
      
        return JSON.parse(jsonPayload); 
      }

      const navigate = useNavigate();

  return (
    <>
      <div className="m-5 d-flex flex-column align-items-center">
        <div className="p-5 bg-white rounded d-flex flex-column align-items-center mw-50">
          <Keyhole className="main-logo" />
          <form>
            <div className="form-group my-2">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email cadastrado"
                id="emailLogin"
              />
            </div>
            <div className="form-group my-2">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                placeholder="Sua senha de acesso"
                id="senhaLogin"
              />
            </div>
            <Link to="/">
              <button
                id="btnEntrar"
                type="button"
                className="btn btn-dark my-2 d-flex align-items-center jutify-content-center"
              >
                <span className="me-2">Entrar</span>
                <SignIn />
              </button>
            </Link>
            <div className="form-group mt-4 mb-2">
              <Link to="/register">
                Ainda não é cadastrado? Se cadastre aqui!
              </Link>
            </div>
            <div className="form-gruop">
              <GoogleOAuthProvider clientId="1072031721025-h4liuqfeq0mmben1h0sj4gstjpuu8at9.apps.googleusercontent.com">
                <div style={{ marginTop: 100, textAlign: "center" }}>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const token = credentialResponse.credential;
                        const decoded = decodeJWT(token);
                        navigate('/', {
                          state: { informacao : { nome: decoded.name , email: decoded.email} }
                        });
                    }}
                    onError={() => {
                      console.log("Erro no login");
                    }}
                  />
                </div>
              </GoogleOAuthProvider>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
