import React from 'react';
import Menu from '../shared/Menu';
import Deck from './Deck';
import Card from '../cards/Card';

class DeckDetails extends React.Component {
  constructor(props) {
    super(props);
    this.idDeck = props.match.params.id;

    this.state = {
      deck: [],
      details: true
    }
  }

  componentWillMount() {
    localStorage.getItem('deck') && this.setState({
      deck: JSON.parse(localStorage.getItem('deck'))
    })
  }

  render() {
    const { deck, details } = this.state;

    return(
      <div>
        <Menu />
        <section className="container-fluid bg-dark">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 text-center text-white py-5">
              <h1>{ deck.name }</h1>
            </div>
          </div>
        </section>

        <section className="container-fluid py-5">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-8 offset-1">
              <div className="row">
                {
                  deck.cards.map(card =>
                    <Card addToDeck={ this.addToDeck } { ...card } details={ details } />
                  )
                }
              </div>
            </div>
            <div className="col-12 col-lg-2">
              <Deck details={ details } deck={ deck } />
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default DeckDetails;