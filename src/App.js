import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const valueState = this.state;
    return (
      <div>
        <h1>Tryunfo!!</h1>
        <Form
          cardName={ valueState.cardName }
          cardDescription={ valueState.cardDescription }
          cardAttr1={ valueState.cardAttr1 }
          cardAttr2={ valueState.cardAttr2 }
          cardAttr3={ valueState.cardAttr3 }
          cardImage={ valueState.cardImage }
          cardRare={ valueState.cardRare }
          cardTrunfo={ valueState.cardTrunfo }
          onInputChange={ this.onInputChange }
        />
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
    );
  }
}

export default App;
