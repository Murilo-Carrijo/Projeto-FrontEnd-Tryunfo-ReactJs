import React from 'react';

import PropTypes from 'prop-types';

import '../style/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card-containe">
        <h1 data-testid="name-card">{cardName}</h1>
        <img
          className="image-container"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <h4 data-testid="description-card">{cardDescription}</h4>
        <p data-testid="attr1-card">
          { `Att --- ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card">
          {`Att --- ${cardAttr2}`}
        </p>
        <p data-testid="attr3-card">
          {`Att --- ${cardAttr3}`}
        </p>
        <h4 data-testid="rare-card">{cardRare}</h4>
        <div>
          {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p> </p>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
