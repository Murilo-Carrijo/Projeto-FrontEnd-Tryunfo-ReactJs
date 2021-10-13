import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              type="text"
              id="name"
              name="name"
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              id="description"
              name="description"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1">
            Att01
            <input
              data-testid="attr1-input"
              type="number"
              id="attr1"
              name="attr1"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2">
            Att02
            <input
              data-testid="attr2-input"
              type="number"
              id="attr2"
              name="attr2"
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3">
            Att03
            <input
              data-testid="attr3-input"
              type="number"
              id="attr3"
              name="attr3"
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              id="image"
              name="image"
            />
          </label>
        </div>

        <div>
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>

        <div>
          <label htmlFor="super">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="super"
              name="super"
            />
            Super Trybe Trunfo
          </label>
        </div>

        <div>
          <button
            data-testid="save-button"
            type="button"
          >
            Salvar
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
