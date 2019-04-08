import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import { getCards } from '../../services/card-service';
import Deck from '../../components/decks/Deck';
import Card from '../../components/cards/Card';
import Menu from '../../components/shared/Menu';
import Footer from '../../components/shared/Footer';

import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const types = [
  {
    name: 'Grass',
    button: 'btn-grass',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png',
  },
  {
    name: 'Fire',
    button: 'btn-fire',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png',
  },
  {
    name: 'Water',
    button: 'btn-water',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png',
  },
  {
    name: 'Lightning',
    button: 'btn-lightning',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/0/04/Lightning-attack.png/20px-Lightning-attack.png',
  },
  {
    name: 'Fighting',
    button: 'btn-fighting',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/4/48/Fighting-attack.png/20px-Fighting-attack.png',
  },
  {
    name: 'Psychic',
    button: 'btn-psychic',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png',
  },
  {
    name: 'Colorless',
    button: 'btn-colorless',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png',
  },
  {
    name: 'Darkness',
    button: 'btn-darkness',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/a/ab/Darkness-attack.png/20px-Darkness-attack.png',
  },
  {
    name: 'Metal',
    button: 'btn-metal',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/6/64/Metal-attack.png/20px-Metal-attack.png',
  },
  {
    name: 'Dragon',
    button: 'btn-dragon',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/8/8a/Dragon-attack.png/20px-Dragon-attack.png',
  },
  {
    name: 'Fairy',
    button: 'btn-fairy',
    icon:
      '//cdn.bulbagarden.net/upload/thumb/4/40/Fairy-attack.png/20px-Fairy-attack.png',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      deck: {
        idDeck: uuid.v4(),
        name: 'My Deck',
        cards: [],
        details: false,
      },
      decks: [],
      showDeck: false,
      isSaved: false,
    };
  }

  componentWillMount() {
    if (localStorage.getItem('deck')) {
      this.setState({
        deck: JSON.parse(localStorage.getItem('deck')),
        decks: JSON.parse(localStorage.getItem('decks')),
        showDeck: true,
        isSaved: true,
      });
    }
    this.setState(prevState => ({
      ...prevState,
      deck: {
        ...prevState.deck,
        date: localStorage.getItem('deckDate'),
      },
    }));
  }

  componentDidMount() {
    const pageSize = 10;
    getCards(pageSize)
      .then(res => {
        const { data } = res;
        this.setState({
          cards: data.cards.sort(() => 0.5 - Math.random()),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('deckTemp', JSON.stringify(nextState.deck));
    localStorage.setItem('deck', JSON.stringify(nextState.deck));
    localStorage.setItem('decks', JSON.stringify(nextState.decks));
    localStorage.setItem(
      'deckDate',
      Date()
        .toString()
        .split(' ')
        .splice(1, 3)
        .join(' '),
    );
  };

  onSave = () => {
    const { decks, deck } = this.state;
    this.setState({
      decks: decks.concat([deck]),
      isSaved: true,
      deck: {
        idDeck: uuid.v4(),
        name: 'My New Deck',
        cards: [],
        details: false,
      },
      showDeck: false,
    });
  };

  addToDeck = (id, name, imageUrl, type, superType) => {
    const { deck } = this.state;

    if (superType === 'Pokémon') {
      types.forEach(item => {
        if (item.name === type) {
          this.setState(prevState => ({
            ...prevState,
            deck: {
              ...prevState.deck,
              cards: deck.cards.concat([
                {
                  idCard: uuid.v4(),
                  id,
                  name,
                  imageUrl,
                  superType,
                  type: item.type,
                  icon: item.icon,
                  button: item.button,
                  hasIcon: true,
                },
              ]),
            },
          }));
        }
      });
    } else {
      this.setState(prevState => ({
        ...prevState,
        deck: {
          ...prevState.deck,
          cards: deck.cards.concat([
            {
              idCard: uuid.v4(),
              id,
              name,
              imageUrl,
              superType,
              hasIcon: false,
            },
          ]),
        },
      }));
    }
    this.setState({
      showDeck: true,
    });
  };

  deleteFromDeck = (id, e) => {
    const { deck } = this.state;
    // evita editar
    e.stopPropagation();

    this.setState(prevState => ({
      ...prevState,
      deck: {
        ...prevState.deck,
        cards: deck.cards.filter(card => card.idCard !== id),
      },
    }));

    if (!localStorage.getItem('deckTemp')) {
      this.setState({
        showDeck: false,
        isSaved: false,
      });
    }
  };

  render() {
    const { cards, deck, showDeck, details, isSaved } = this.state;

    return (
      <div>
        <Menu />
        <section className="container-fluid bg-dark">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 text-center text-white py-5">
              <h1>Poki</h1>
              <h3>Crie seu próprio deck ou veja os melhores!</h3>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row justify-content-center">
            <div className="col-4 text-center">
              <Link to="/decks" className="btn btn-primary">
                Todos os Decks
              </Link>
            </div>
          </div>
        </section>

        <section className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1>Cartas</h1>
              <h6>Clique na carta para adicionar ao deck</h6>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-6">
              <div className="row justify-content-center">
                {cards.map(card => (
                  <Card key={card.id} addToDeck={this.addToDeck} {...card} />
                ))}
              </div>
            </div>
            <div className="col-3">
              {showDeck && (
                <Deck
                  details={details}
                  deck={deck}
                  deleteFromDeck={this.deleteFromDeck}
                  onSave={this.onSave}
                  isSaved={isSaved}
                  onEdit={this.onEdit}
                  onDeckNameClick={this.activateDeckNameEdit}
                />
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
