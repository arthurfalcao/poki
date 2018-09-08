import React from "react";

import './Deck.css';

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

const types = [
  {
    name: 'Grass',
    button: 'btn-grass',
    icon: '//cdn.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png'
  },
  {
    name: 'Fire',
    button: 'btn-fire',
    icon: '//cdn.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png'
  },
  {
    name: 'Water',
    button: 'btn-water',
    icon: '//cdn.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png'
  },
  {
    name: 'Lightning',
    button: 'btn-lightning',
    icon: '//cdn.bulbagarden.net/upload/thumb/0/04/Lightning-attack.png/20px-Lightning-attack.png'
  },
  {
    name: 'Fighting',
    button: 'btn-fighting',
    icon: '//cdn.bulbagarden.net/upload/thumb/4/48/Fighting-attack.png/20px-Fighting-attack.png'
  },
  {
    name: 'Pyschic',
    button: 'btn-pyschic',
    icon: '//cdn.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png'
  },
  {
    name: 'Colorless',
    button: 'btn-colorless',
    icon: '//cdn.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png'
  },
  {
    name: 'Darkness',
    button: 'btn-darkness',
    icon: '//cdn.bulbagarden.net/upload/thumb/a/ab/Darkness-attack.png/20px-Darkness-attack.png'
  },
  {
    name: 'Metal',
    button: 'btn-metal',
    icon: '//cdn.bulbagarden.net/upload/thumb/6/64/Metal-attack.png/20px-Metal-attack.png'
  },
  {
    name: 'Dragon',
    button: 'btn-dragon',
    icon: '//cdn.bulbagarden.net/upload/thumb/8/8a/Dragon-attack.png/20px-Dragon-attack.png'
  },
  {
    name: 'Fairy',
    button: 'btn-fairy',
    icon: '//cdn.bulbagarden.net/upload/thumb/4/40/Fairy-attack.png/20px-Fairy-attack.png'
  },
];

class Deck extends React.Component {
  constructor() {
    super();

    this.state = {
      matched: []
    }

    this.didMatched = this.didMatched.bind(this);
  }

  didMatched = (localType, deckType) => {
    localType.forEach(tipo => {
      console.log(typeof tipo.name);
      console.log(typeof deckType.type[0]);
      console.log(tipo.name === deckType.type[0]);
      if (tipo.name === deckType.type[0]) {
        console.log("ue");
        
        this.setState({
          matched: this.state.matched.concat([{
            name: tipo.name,
            button: tipo.button,
            icon: tipo.icon
          }])
        })
      }
    });
  }

  render() {
    const { deck, deleteFromDeck=() => {} } = this.props;
    const matched = this.state;

    return (
      <div className="card">
        <div className="btn-group-vertical btn-block">
          {
            deck.map(card =>
              <div className="btn-group" role="group" key={ card.idCard }>
                <button className={`btn ${ types[0].button }`} onClick={ deleteFromDeck.bind(null, card.idCard) }>
                  <span className="badge badge-pill badge-light float-left">
                    <img src={ types[0].icon } alt={card.type}/>
                  </span>
                  {card.name} 
                </button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Deck;