import React from "react";
import PropTypes from "prop-types";

// class Card extends React.Component {

//   render() {
//     return (
//       <div className="col-6 col-sm-4 col-lg-3 pt-5 text-center" key={ this.props.id }>
//         <div onClick={() => this.props.addToDeck(this.props.id, this.props.name, this.props.types, this.props.supertype )} className="card-click">
//           <img className="img-fluid img-cards" alt={ this.props.name } src={ this.props.imageUrl } />
//         </div>
//         <h6 className="mt-2">{ this.props.name } <span className="badge badge-danger">{ this.props.supertype }</span> </h6>
//       </div>
//     );
//   }
// }

// export default Card;

const Card = ({ addToDeck = () => {}, ...card }) => {
  return(
    <div className="col-6 col-sm-4 col-lg-3 pt-5 text-center" key={ card.idCard }>
      <div onClick={() => addToDeck(card.id, card.name, card.types, card.supertype )} className="card-click">
        <img className="img-fluid img-cards" alt={ card.name } src={ card.imageUrl } />
      </div>
      <h6 className="mt-2">{ card.name } <span className="badge badge-danger">{ card.supertype }</span> </h6>
    </div>
  )
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};