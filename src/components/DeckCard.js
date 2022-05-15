import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../style/DeckCard.css';

class DeckCard extends React.Component {
  selfDelete = ({ target }) => {
    target.parentNode.remove();
  }

  render() {
    const { deckCard } = this.props;
    return (
      deckCard.map((card) => {
        const {
          cardName,
          cardImage,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardRare,
          cardTrunfo,
        } = card;

        return (
          <div
            className="deck-container"
            key={ cardName }
          >
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
            <button
              className="button-exclude"
              type="button"
              onClick={ this.selfDelete }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </div>
        );
      }));
  }
}

DeckCard.propTypes = {
  deckCard: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DeckCard;
