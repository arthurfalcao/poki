import React from 'react';
import Menu from '../shared/Menu';
import { Link } from 'react-router-dom';

class Decks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decks: []
    }
  }

  componentWillMount() {
    localStorage.getItem('decks') && this.setState({
      decks: JSON.parse(localStorage.getItem('decks'))
    })
  }

  render() {
    const { decks } = this.state;
    
    return (
      <div>
        <Menu />
        <section className="container-fluid bg-dark">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 text-center text-white py-5">
              <h1>Decks</h1>
              <h3>Veja os melhores decks criados pela comunidade</h3>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row justify-content-between">
            <div className="col-12">
              <div className="row">
                {
                  decks.map(deck =>
                    <div className="col-3 pb-3">
                      <Link to={"deck/"+ deck.idDeck } className="btn btn-dark btn-block">
                        <div>
                          <div className="card-header">
                            { deck.name }
                          </div>
                          <div className="card-footer">
                            <p className="mb-0">Modificado: { deck.date }</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
                {/* <div className="col-3">
                  <Link to={"deck/"+ decks.idDeck } className="btn btn-dark">
                    <div>
                      <div className="card-header">
                        { decks.name }
                      </div>
                      <div className="card-footer">
                        <p className="mb-0">Modificado: { decks.date }</p>
                      </div>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Decks;