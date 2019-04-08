import React from 'react';

const superType = type => {
  if (type === 'Trainer') {
    return 'T';
  }
  if (type === 'Energy') {
    return 'E';
  }

  return '';
};

export default ({ deleteFromDeck = () => {}, ...card }) => {
  if (card.hasIcon) {
    return <Icon {...card} deleteFromDeck={deleteFromDeck} />;
  }

  return (
    <button
      type="button"
      className="list-group-item d-flex justify-content-between align-items-center font-weight-bold btn-default"
      onClick={deleteFromDeck}
    >
      {card.name}
      <span className="badge badge-pill badge-light float-left">
        <h6 className="font-weight-bold mb-0 px-1">
          {superType(card.superType)}
        </h6>
      </span>
    </button>
  );
};

const Icon = ({ deleteFromDeck = () => {}, ...card }) => (
  <button
    type="button"
    className={`list-group-item d-flex justify-content-between align-items-center font-weight-bold ${
      card.button
    }`}
    onClick={deleteFromDeck}
  >
    {card.name}
    <span className="badge badge-pill badge-light float-left">
      <img src={card.icon} alt={card.type} />
    </span>
  </button>
);
