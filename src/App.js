import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import DeckCard from './components/DeckCard';

import './style/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.attrValidation = this.attrValidation.bind(this);
    this.inputValidation = this.inputValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.isCardTrunfo = this.isCardTrunfo.bind(this);
    this.isSuperTrunfo = this.isSuperTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      deckCard: [],
      checkedTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value },
    () => this.inputValidation());
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    const result = this.isCardTrunfo();
    if (cardTrunfo && result === undefined) {
      this.setState((prevState) => ({
        deckCard: [
          ...prevState.deckCard,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          },
        ],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        hasTrunfo: true,
      }));
    } else {
      this.setState((prevState) => ({
        deckCard: [
          ...prevState.deckCard,
          {
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
          },
        ],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
      }));
    }
  }

  isCardTrunfo() {
    const { deckCard } = this.state;
    const filtro = deckCard.find((card) => card.cardTrunfo);
    return filtro;
  }

  attrValidation() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maximum = 90;
    const minimum = 0;
    const maxSum = 210;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const sumAttr = attr1 + attr2 + attr3;
    if (
      attr1 <= maximum
      && attr1 >= minimum
      && attr2 <= maximum
      && attr2 >= minimum
      && attr3 <= maximum
      && attr3 >= minimum
      && sumAttr <= maxSum
    ) {
      return true;
    }
    return false;
  }

  inputValidation() {
    const { cardName, cardDescription, cardImage } = this.state;
    const result = this.attrValidation();
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && result
    ) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    this.setState({
      isSaveButtonDisabled: true,
    });
  }

  isSuperTrunfo() {
    const { checkedTrunfo } = this.state;
    if (checkedTrunfo) {
      this.setState({
        checkedTrunfo: false,
      });
    } else {
      this.setState({
        checkedTrunfo: true,
      });
    }
  }

  render() {
    const valueState = this.state;
    return (
      <div className="forms">
        <h1 className="title">Tryunfo!!</h1>
        <div className="container">
          <Form
            cardName={ valueState.cardName }
            cardDescription={ valueState.cardDescription }
            cardAttr1={ valueState.cardAttr1 }
            cardAttr2={ valueState.cardAttr2 }
            cardAttr3={ valueState.cardAttr3 }
            cardImage={ valueState.cardImage }
            cardRare={ valueState.cardRare }
            cardTrunfo={ valueState.cardTrunfo }
            hasTrunfo={ valueState.hasTrunfo }
            isSaveButtonDisabled={ valueState.isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="card-containe">
            <Card
              cardName={ valueState.cardName }
              cardDescription={ valueState.cardDescription }
              cardAttr1={ valueState.cardAttr1 }
              cardAttr2={ valueState.cardAttr2 }
              cardAttr3={ valueState.cardAttr3 }
              cardImage={ valueState.cardImage }
              cardRare={ valueState.cardRare }
              cardTrunfo={ valueState.cardTrunfo }
            />
          </div>
        </div>
        <h1 className="title-deck"> DeckCard </h1>
        <div className="container-dackcard">
          <DeckCard
            deckCard={ valueState.deckCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
