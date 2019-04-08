import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faLock,
  faCircleNotch,
  faPhone,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../shared/Menu';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(faAt, faLock, faCircleNotch, faPhone, faMapMarkerAlt);

function Register() {
  return (
    <div>
      <Menu />
      <section className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 text-center">
            <h1 className="text-info">Poki</h1>
          </div>
          <div className="col-12 col-sm-6">
            <div className="card">
              <header className="card-header">
                Preencha todos os campos para criar a conta.
              </header>
              <main className="card-body">
                <form>
                  <div className="form-group input-group">
                    <label htmlFor="name" className="sr-only">
                      Nome
                    </label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon="circle-notch" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nome"
                      />
                    </div>
                  </div>
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
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
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
                        name="password"
                        className="form-control"
                        placeholder="Senha"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Finalizar
                  </button>
                  <hr />
                  <span>
                    Já é cadastrado? <Link to="/login">Clique aqui</Link>
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

export default Register;
