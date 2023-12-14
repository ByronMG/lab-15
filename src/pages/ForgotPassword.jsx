function ForgotPassword() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header bg-primary">
                <h3 className="text-center text-white font-weight-light my-4">
                  Restablecer contraseña
                </h3>
              </div>
              <div className="card-body">
                <div className="small mb-3 text-muted">
                  Ingresa tu correo y contraseña
                </div>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="ejemplo@gmail.com"
                    />
                    <label htmlFor="inputEmail">Correo</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
                    <a className="small text-primary" href="login">
                      Regresar a login
                    </a>
                    <a className="btn btn-success" href="login">
                      Cambiar contraseña
                    </a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <a href="Register">¿Tienes cuenta? Inicia sesión</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ForgotPassword;
  