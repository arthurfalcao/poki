import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Menu from '../shared/Menu'; 
import './Register.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock, faCircleNotch, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons' 

library.add(faAt, faLock, faCircleNotch, faPhone, faMapMarkerAlt);

class Register extends Component { 
    
    render() { 
        return (
            <div>
                <Menu></Menu>
                <section class="container pt-5">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-8 text-center">
                            <h1 class="text-info">Poki</h1>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="card">
                                <header class="card-header">
                                    Preencha todos os campos para criar a conta.
                                </header>
                                <main class="card-body">
                                    <form>
                                        <div class="form-group input-group">
                                            <label for="name" class="sr-only">Nome</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <FontAwesomeIcon icon="circle-notch" />
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control" id="name" placeholder="Nome" />
                                            </div>
                                        </div>
                                        <div class="form-group input-group">
                                            <label for="email" class="sr-only">Email</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <FontAwesomeIcon icon="at" />
                                                    </span>
                                                </div>
                                                <input type="email" name="email" id="email" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="form-group input-group">
                                            <label for="senha" class="sr-only">Senha</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <FontAwesomeIcon icon="lock" />
                                                    </span>
                                                </div>
                                                <input type="password" name="password" class="form-control" placeholder="Senha" />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-success">Finalizar</button>
                                        <hr />
                                        <span>Já é cadastrado? <Link to="/login">Clique aqui</Link></span>
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

export default Register;