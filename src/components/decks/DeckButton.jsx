import React from 'react';
import { Link } from 'react-router-dom';

export default ({ details, onSave, idDeck, isSaved }) => {
  if (!details) {
    return <DeckButton onSave={ onSave } idDeck={ idDeck } isSaved={ isSaved } />
  }

  return (
    <Link to="/" className="btn btn-block btn-primary">Editar</Link>
  )
}

const DeckButton = ({ onSave=() => {}, idDeck, isSaved }) => {
  return(
    <div className="btn-group" role="group">
      <button className="btn btn-info" onClick={ onSave }>Salvar</button>
      {
        isSaved &&
          <Link to={"deck/"+ idDeck } className="btn btn-danger">Detalhes</Link>
      }
    </div>
  )
}