import React, { Component } from "react";
import Menu from "../shared/Menu";

class CardDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cards: [],
    }
    this.name = props.name;
    this.image = props.image;
    this.id = props.match.params.id;
  }

  componentDidMount() {
    fetch('https://api.pokemontcg.io/v1/cards/'+this.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ cards: data.card })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
          <Menu />
          <section className="container py-5 bg-white">
            <div className="row justify-content-center">
                <div className="col-4 text-center">
                    <img src={this.state.cards.imageUrlHiRes} alt={this.state.cards.name} className="img-fluid"/>
                </div>
                <div className="col-4 text-center">
                    <h2 className="bg-secondary p-3 text-white rounded-top mb-0">{this.state.cards.name}</h2>
                    <h4 className="bg-light p-3 rounded-bottom">{this.state.cards.supertype} - {this.state.cards.subtype}</h4>
                    <button className="btn btn-info mt-3">Adicionar ao Deck</button>
                </div>
            </div>
          </section>
      </div>
    );
  }
}
export default CardDetails;

