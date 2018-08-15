import React, { Component } from 'react';

import Menu from './components/shared/Menu';
import Footer from './components/shared/Footer';

import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = 'https://api.pokemontcg.io/v1/cards';

class App extends Component {
  constructor(props) {
    super(props);

    //this.app = firebase.initializeApp(DB_CONFIG);
    //this.db = this.app.database().ref().child('cards');

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ cards: data.cards })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <Menu></Menu>
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
            <div className="col-12 text-center">
              <h1>Cartas</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {
              cards.map(card =>
                  <div className="col-3 pt-5 text-center" key={card.id}>
                    <Link to={"card/"+card.id}>
                      <img className="img-fluid img-cards" alt={card.name} src={card.imageUrl}/>
                    </Link>
                    <h6 className="mt-2">{card.name} <span className="badge badge-danger">{card.supertype}</span> </h6>
                  </div>
                )
              }
            </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
