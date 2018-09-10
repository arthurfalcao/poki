import React from 'react';
import Menu from '../shared/Menu';
import Deck from './Deck';
import Card from '../cards/Card';

class DeckDetails extends React.Component {
  constructor(props) {
    super(props);
    this.idDeck = props.match.params.id;

    this.state = {
      deck: {},
      decks: [],
      details: true,
      hasDeck: false
    }
  }

  componentWillMount() {
    localStorage.getItem('decks') && this.setState({
      decks: JSON.parse(localStorage.getItem('decks'))
    });
  }

  componentDidMount() {
    this.state.decks.forEach(deck => {
      if (deck.idDeck == this.idDeck) {
        this.setState({
          deck: deck,
          hasDeck: true
        })
      }
    })
  }

  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('deckTemp', JSON.stringify(nextState.deck));
    localStorage.setItem('deckDate', Date().toString().split(' ').splice(1,3).join(' '));
  }

  render() {
    const { deck, details, hasDeck } = this.state;
    
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
                  hasDeck &&
                    deck.cards.map(card =>
                      <Card addToDeck={ this.addToDeck } { ...card } details={ details } />
                    )
                }
              </div>
            </div>
            <div className="col-12 col-lg-3">
              {/* <Deck details={ details } deck={ deck } /> */}
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default DeckDetails;