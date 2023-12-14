import { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.login(usuario, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setMessage("Datos no válidos");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary">
              <h3 className="text-center text-white font-weight-light my-4">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputText" className="form-label text-primary">
                    Usuario
                  </label>
                  <input
                    className="form-control"
                    id="inputText"
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label text-primary">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    id="inputPassword"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    id="inputRememberPassword"
                    type="checkbox"
                    checked={rememberPassword}
                    onChange={() => setRememberPassword(!rememberPassword)}
                  />
                  <label
                    className="form-check-label text-primary"
                    htmlFor="inputRememberPassword"
                  >
                    Recordar contraseña
                  </label>
                </div>
                <div className="d-flex justify-content-between mt-4 mb-3">
                  <a className="small text-primary" href="ForgotPassword">
                    Olvidaste tu contraseña?
                  </a>
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Login"
                  />
                </div>
              </form>
              {message && (
                <p className="text-center p-2 bg-danger text-white">{message}</p>
              )}
            </div>
            <div className="card-footer text-center py-3 bg-primary">
              <div className="small text-white">
                <a href="Register">Crear Cuenta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Login;
