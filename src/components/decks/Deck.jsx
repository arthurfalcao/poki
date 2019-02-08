import React from "react";

import './Deck.css';
import DeckCard from "./DeckCard";
import DeckTitle from "./DeckTitle";
import DeckButton from "./DeckButton";

const Deck = ({ deck, deleteFromDeck=() => {}, onSave=() => {}, details, isSaved }) => (
  <div className="card">
    <div className="card-header text-center">
      <DeckTitle value={ deck.name } />
    </div>
    <div className="card-body p-0">
      <div className="list-group">
        {
          deck.cards.map(card =>
            <DeckCard key={card.idCard} { ...card } deleteFromDeck={ deleteFromDeck.bind(null, card.idCard) } />
          )
        }
      </div>
    </div>
    <div className="card-footer text-center">
      <DeckButton details={ details } idDeck={ deck.idDeck } onSave={ onSave } isSaved={ isSaved } />
    </div>
  </div>
);

export default Deck;