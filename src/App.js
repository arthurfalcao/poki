import React from 'react';

import Deck from "./components/decks/Deck";
import Card from "./components/cards/Card";
import Menu from './components/shared/Menu';
import Footer from './components/shared/Footer';

import uuid from 'uuid';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'https://api.pokemontcg.io/v1/cards?pageSize=24';

class App extends React.Component {
  constructor(props) {
    super(props);

    //this.app = firebase.initializeApp(DB_CONFIG);
    //this.db = this.app.database().ref().child('cards');

    this.state = {
      cards: [],
      deck: {
          idDeck: uuid.v4(),
          name: 'My Deck',
          cards: []
        },
      showDeck: false,
      oush: {
        idDeck: uuid.v4(),
        name: 'My Deck',
        cards: []
      },
    };
  }

  // componentWillMount() {
  //   localStorage.getItem('deckTemp') && this.setState({
  //     deck: JSON.parse(localStorage.getItem('deckTemp'))
  //   })
  // }
  
  componentDidMount() {
    this.fetchCards();
    console.log(this.state.oush.name);
    
  }

  fetchCards() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({ cards: data.cards })
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('deckTemp', JSON.stringify(nextState.deck));
    localStorage.setItem('deckDate', Date.now());
  }

  addToDeck = (id, name, type, superType) => {
    if (superType == "Pokémon") {
      types.forEach(types => {
        if (types.name == type) {
          this.setState(prevState => ({
            ...prevState,
            deck: {
              ...prevState.deck,
              cards: this.state.deck.cards.concat([{
                idCard: uuid.v4(),
                id: id,
                name: name,
                superType: superType,
                type: types.type,
                icon: types.icon,
                button: types.button,
                hasIcon: true
              }])
            }
          })
          )
        }
      })
    } else {
      this.setState(prevState => ({
        ...prevState,
        deck: {
          ...prevState.deck,
          cards: this.state.deck.cards.concat([{
            idCard: uuid.v4(),
            id: id,
            name: name,
            superType: superType,
            hasIcon: false
          }])
        }
      })
      )
    }
    this.setState({
      showDeck: true
    });
  }

  deleteFromDeck = (id, e) => {
    // evita editar
    e.stopPropagation();
    
    this.setState(prevState => ({
      ...prevState,
      deck: {
        ...prevState.deck,
        cards: this.state.deck.cards.filter(
          card => card.idCard !== id
        )
      }
    })
    )

    if (!localStorage.getItem('deckTemp')) {
      this.setState({
        showDeck: false
      })
    }
  }

  render() {
    const { cards, deck, showDeck } = this.state;

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

        <section className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h1>Cartas</h1>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-6">
              <div className="row justify-content-center">
                {
                  cards.map(card =>
                    <Card addToDeck={ this.addToDeck } { ...card } />
                  )
                }
              </div>
            </div>
            <div className="col-2 offset-1">
              {
                showDeck &&
                <Deck deck={ deck } deleteFromDeck={ this.deleteFromDeck } />
              }
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const types = [
  {
    name: 'Grass',
    button: 'btn-grass',
    icon: '//cdn.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png'
  },
  {
    name: 'Fire',
    button: 'btn-fire',
    icon: '//cdn.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png'
  },
  {
    name: 'Water',
    button: 'btn-water',
    icon: '//cdn.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png'
  },
  {
    name: 'Lightning',
    button: 'btn-lightning',
    icon: '//cdn.bulbagarden.net/upload/thumb/0/04/Lightning-attack.png/20px-Lightning-attack.png'
  },
  {
    name: 'Fighting',
    button: 'btn-fighting',
    icon: '//cdn.bulbagarden.net/upload/thumb/4/48/Fighting-attack.png/20px-Fighting-attack.png'
  },
  {
    name: 'Psychic',
    button: 'btn-psychic',
    icon: '//cdn.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png'
  },
  {
    name: 'Colorless',
    button: 'btn-colorless',
    icon: '//cdn.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png'
  },
  {
    name: 'Darkness',
    button: 'btn-darkness',
    icon: '//cdn.bulbagarden.net/upload/thumb/a/ab/Darkness-attack.png/20px-Darkness-attack.png'
  },
  {
    name: 'Metal',
    button: 'btn-metal',
    icon: '//cdn.bulbagarden.net/upload/thumb/6/64/Metal-attack.png/20px-Metal-attack.png'
  },
  {
    name: 'Dragon',
    button: 'btn-dragon',
    icon: '//cdn.bulbagarden.net/upload/thumb/8/8a/Dragon-attack.png/20px-Dragon-attack.png'
  },
  {
    name: 'Fairy',
    button: 'btn-fairy',
    icon: '//cdn.bulbagarden.net/upload/thumb/4/40/Fairy-attack.png/20px-Fairy-attack.png'
  },
];

export default App;
