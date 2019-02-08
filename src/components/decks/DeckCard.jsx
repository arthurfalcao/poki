import React from 'react';

this.superType = (superType) => {
  if (superType === "Trainer") {
    return "T";
  } else if (superType === "Energy") {
    return "E"
  }
}

export default ({ deleteFromDeck = () => {}, ...card, }) => {
  if (card.hasIcon) {
    return <Icon { ...card } deleteFromDeck={ deleteFromDeck } />
  }

  return (
    <button 
        className="list-group-item d-flex justify-content-between align-items-center font-weight-bold btn-default" 
        onClick={ deleteFromDeck }
    >
      { card.name }
      <span className="badge badge-pill badge-light float-left">
        <h6 className="font-weight-bold mb-0 px-1">{ this.superType(card.superType) }</h6>
      </span>
    </button>
  );
}

const Icon = ({ deleteFromDeck = () => {}, ...card }) => (
  <button 
          className={`list-group-item d-flex justify-content-between align-items-center font-weight-bold ${ card.button }`} 
          onClick={ deleteFromDeck }>
    { card.name } 
    <span className="badge badge-pill badge-light float-left">
      <img src={ card.icon } alt={ card.type } />
    </span>
  </button>
);