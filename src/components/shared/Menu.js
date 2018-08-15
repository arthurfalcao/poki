import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        }
    }

    render() {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <Link to="/" className="navbar-brand">Poki</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarPoki">
                        {
                            this.props.authenticated
                            ? (
                            <div className="dropdown">
                            </div>
                            )
                            : (
                            <ul className="navbar-nav ml-auto">
                                <div className="btn-group" role="group">
                                    <Link to="/login" className="btn btn-light">Entrar</Link>
                                    <Link to="/register" className="btn btn-info">Cadastre-se</Link>
                                </div>
                            </ul>
                            )
                        }
                    </div>
                </div>

            </nav>
        );
    }
}

export default Menu;