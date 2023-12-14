function Register() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header bg-primary">
                <h3 className="text-center text-white font-weight-light my-4">
                  Crear Cuenta
                </h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          placeholder="Ingrese su primer nombre"
                        />
                        <label htmlFor="inputFirstName">Primer Nombre</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          id="inputLastName"
                          type="text"
                          placeholder="Ingrese su apellido"
                        />
                        <label htmlFor="inputLastName">Segundo Nombre</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="inputEmail">Correo</label>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Crear una contraseña"
                        />
                        <label htmlFor="inputPassword">Contraseña</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3 mb-md-0">
                        <input
                          className="form-control"
                          id="inputPasswordConfirm"
                          type="password"
                          placeholder="Confirmar contraseña"
                        />
                        <label htmlFor="inputPasswordConfirm">
                          Confirmar Contraseña
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 mb-0">
                    <div className="d-grid">
                      <a
                        className="btn btn-success btn-block"
                        href="login"
                      >
                        Crear Cuenta
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <a href="login">¿Ya tienes cuenta? Inicia Sesión</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;
  