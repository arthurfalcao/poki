import React from "react";

import './Deck.css';
import DeckCard from "./DeckCard";
import DeckTtile from "./DeckTtile";

// export default ({deck, deleteFromDeck=() => {}}) => (
//   <div className="card">
//     <div className="btn-group-vertical btn-block">
//       {
//         deck.map(card =>
//           <div className="btn-group" role="group" key={ card.idCard }>
//             <button className="btn btn-primary" onClick={ deleteFromDeck.bind(null, card.idCard) }>
//               <span className="badge badge-pill badge-light float-left">
//                 <img src="//cdn.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png" alt={card.type}/>
//               </span>
//               {card.name} 
//             </button>
//           </div>
//         )
//       }
//     </div>
//   </div>
// );

class Deck extends React.Component {
  render() {
    const { deck, deleteFromDeck=() => {} } = this.props;

    return (
      <div className="card">
        <div className="card-header text-center">
          <DeckTtile value="My Deck" />
        </div>
        <div className="card-body p-0">
          <div className="list-group">
            {
              deck.map(card =>
                <DeckCard { ...card }
                          deleteFromDeck={ deleteFromDeck.bind(null, card.idCard) } />
                  // <button key={ card.idCard } 
                  //         className={`list-group-item d-flex justify-content-between align-items-center font-weight-bold ${ card.button }`} 
                  //         onClick={ deleteFromDeck.bind(null, card.idCard) }>
                  //   { card.name } 
                  //   <span className="badge badge-pill badge-light float-left">
                  //     <img src={ card.icon } alt={ card.type } />
                  //   </span>
                  // </button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;