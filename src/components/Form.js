import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form-container">
        <div className="container-text">
          <label
            htmlFor="name-input"
            className="label-input"
          >
            Nome
            <input
              className="input-text"
              data-testid="name-input"
              type="text"
              id="name-input"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container-text">
          <label
            className="label-input"
            htmlFor="description-input"
          >
            Descrição
            <textarea
              className="input-text"
              data-testid="description-input"
              id="description-input"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container-text">
          <label
            className="label-input"
            htmlFor="attr1-input"
          >
            Att01
            <input
              className="input-text"
              data-testid="attr1-input"
              type="number"
              id="attr1-input"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container-text">
          <label
            className="label-input"
            htmlFor="attr2-input"
          >
            Att02
            <input
              className="input-text"
              data-testid="attr2-input"
              type="number"
              id="attr2-input"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container-text">
          <label
            className="label-input"
            htmlFor="attr3-input"
          >
            Att03
            <input
              className="input-text"
              data-testid="attr3-input"
              type="number"
              id="attr3-input"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container-text">
          <label
            className="label-input"
            htmlFor="image-input"
          >
            Imagem
            <input
              className="input-text"
              data-testid="image-input"
              type="text"
              id="image-input"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="rare-trunfo-container">
          <div className="rare-container">
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </div>
          {
            hasTrunfo ? (
              <p>Você já tem um Super Trunfo em seu Baralho</p>
            ) : (
              <div className="trunfo-container">
                <label htmlFor="trunfo-input">
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    id="trunfo-input"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trybe Trunfo
                </label>
              </div>
            )
          }
        </div>

        <div>
          <button
            className="save-button"
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
