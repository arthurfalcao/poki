import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class Footer extends Component {

    render() {
        return ( 
            <footer className="container-fluid bg-dark">
                <div className="row text-center">
                    <div className="col-12">
                    <h6 className="text-white my-3">
                        2018
                        <a href="https://github.com/arthurfalcao/poki" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FontAwesomeIcon icon={['fab', 'github']} className="mx-1" />
                        </a>
                        Arthur Falcão
                    </h6>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;