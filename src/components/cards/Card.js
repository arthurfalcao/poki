import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.image = props.image;
    this.id = props.id;
  }

  render() {
    return (
      <div >
          <p>{this.name}</p>
          <img src={this.image}/>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Card;

