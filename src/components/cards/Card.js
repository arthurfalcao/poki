import React from "react";
import { Link } from 'react-router-dom';

export default ({ details, addToDeck, ...card }) => {
  if (!details) {
    return <Card addToDeck={ addToDeck } { ...card } />
  }

  return(
    <div className="col-6 col-sm-4 col-lg-2 pt-5 text-center">
      <Link to={"/card/"+card.id}>
        <img className="img-fluid img-cards" alt={ card.name } src={ card.imageUrl }/>
      </Link>
      <h6 className="badge badge-pill badge-dark mt-2">{ card.name } <span className="badge badge-danger">{ card.supertype }</span> </h6>
    </div>
  )
}

const Card = ({ addToDeck = () => {}, ...card }) => {
  return(
    <div className="col-6 col-sm-4 col-lg-3 pt-5 text-center">
      <div onClick={() => addToDeck(card.id, card.name, card.imageUrl, card.types, card.supertype )} className="card-click">
        <img className="img-fluid img-cards" alt={ card.name } src={ card.imageUrl } />
      </div>
      <h6 className="mt-2">{ card.name } <Link to={"/card/"+card.id} className="badge badge-danger">Detalhes</Link> </h6>
    </div>
  )
}