import React from "react";
import { Link } from 'react-router-dom';

export default ({deck, deleteFromDeck=() => {}}) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      {
        deck.map(card =>
          <li className="list-group-item" key={card.idCard}>
            <a onClick={deleteFromDeck.bind(null, card.idCard)}>
              {card.name}
            </a>
          </li>
        )
      }
    </ul>
  </div>
);
