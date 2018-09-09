import React, { Component } from "react";
import Menu from "../shared/Menu";

import './cardDetails.css';

class CardDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
        card: [],
    }
    this.id = props.match.params.id;
  }

  componentDidMount() {
    fetch('https://api.pokemontcg.io/v1/cards/'+this.id)
      .then(response => response.json())
      .then(data => {
        this.setState({ card: data.card })
      })
      .catch(error => {
        console.log(error);
      }
    );  
  }
    

  render() {
    const { card } = this.state;

    return (
      <div>
        <Menu />
        <section className="container py-5 bg-white">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4 text-center">
                <img src={ card.imageUrlHiRes } alt={ card.name } className="img-fluid"/>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <ul className="list-group">
                <li className="list-group-item bg-secondary">
                  <h2 className="text-white rounded-top mb-0">{ card.name }</h2>
                </li>
                <li className="list-group-item bg-light">
                  <h4 className="rounded-bottom mb-0">{ card.supertype } - { card.subtype }</h4>
                </li>
                {/* { 
                  card.attacks.map(attack =>
                    <li className="list-group">
                      <h5>{ attack.name }</h5>
                      <p>{ attack.text }</p>
                    </li>
                  )
                } */}
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default CardDetails;

