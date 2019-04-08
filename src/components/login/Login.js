import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';
import Menu from '../shared/Menu';

import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { app, facebookProvider } from '../../config/config';

library.add(faAt, faLock);

class Login extends Component {
  constructor(props) {
    super(props);

    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);

    this.state = {
      redirect: false,
    };
  }

  authWithFacebook() {
    app
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          this.toaster.show({
            message: 'Unable to sign in with Facebook',
          });
        } else {
          this.setState({ redirect: true });
        }
      });
  }

  authWithEmailPassword(event) {
    event.preventDefault();
    console.log('Autenticado com o Email');
    console.table([
      {
        email: this.emailInput.value,
        password: this.passwordInput.value,
      },
    ]);
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Menu />
        <section className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 text-center">
              <h1 className="text-info">Poki</h1>
              <p>Caso você seja cadastrado entre com seus dados.</p>
            </div>
            <div className="col-12 col-sm-6">
              <div className="card">
                <header className="card-header">Digite o Email e Senha</header>
                <main className="card-body">
                  <form
                    onSubmit={event => {
                      this.authWithEmailPassword(event);
                    }}
                    ref={form => {
                      this.loginForm = form;
                    }}
                  >
                    <div className="form-group input-group">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon="at" />
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          ref={input => {
                            this.emailInput = input;
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <label htmlFor="senha" className="sr-only">
                        Senha
                      </label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon="lock" />
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          id="senha"
                          name="password"
                          placeholder="Senha"
                          ref={input => {
                            this.passwordInput = input;
                          }}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-danger">
                      Entrar
                    </button>
                    <span className="float-right">Esqueceu a senha?</span>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          this.authWithFacebook();
                        }}
                      >
                        Entre com o Facebook
                      </button>
                    </div>
                    <hr />
                    <span>
                      Não tem cadastro? <Link to="/register">Clique aqui</Link>
                    </span>
                  </form>
                </main>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
