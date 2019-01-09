import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withHandlers, withState } from 'recompose';
import styled from 'styled-components';

const containsLetterMin = /[a-z]{1,}/;
const containsLetterMax = /[A-Z]{1,}/;
const constaisSpecialCaracter = /[!-\/\?\<\>\=\:\;\@]{1,}/;
const constainsNumber = /[\d]{1,}/;
const constainsSixCaracters = /^(.){6,}$/;

const enhance = compose(
  withState('min', 'setMin', false),
  withState('max', 'setMax', false),
  withState('specialCaracter', 'setSpecialCaracter', false),
  withState('number', 'setNumber', false),
  withState('sixCaracters', 'setSixCaracters', false),
  withHandlers({
    toggleColor: ({
      setTruth,
      setMin,
      setMax,
      setSpecialCaracter,
      setNumber,
      setSixCaracters
    }) => text => {
      setMin(containsLetterMin.test(text));
      setMax(containsLetterMax.test(text));
      setSpecialCaracter(constaisSpecialCaracter.test(text));
      setNumber(constainsNumber.test(text));
      setSixCaracters(constainsSixCaracters.test(text));
    }
  })
);

const Components = enhance(
  ({
    toggleColor,
    min,
    max,
    specialCaracter,
    number,
    sixCaracters,
    isDisabled
  }) => (
      <div>
        <input
          type="password"
          id="text"
          onChange={e => toggleColor(e.target.value)}
        />
        <br />
        <br />
        <button
          type="submit"
          disabled={!sixCaracters && !number && !specialCaracter && !max && !min}
        >
          Enviar
      </button>
        <ul>
          <Item truth={sixCaracters}>Ter no mínimo 6 caracteres</Item>
          <Item truth={number}>Pelo menos um número</Item>
          <Item truth={specialCaracter}>Pelo menos um caracter especial</Item>
          <Item truth={max}>Pelo uma letra maiúscula</Item>
          <Item truth={min}>Pelo uma letra minuscula</Item>
        </ul>
      </div>
    )
);

const Item = styled.li`
  ${props => props.truth && 'color: green;'};
`;

function Password() {
  return (
    <div className="App">
      <h1>Password validate</h1>
      <Components />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Password />, rootElement);

export default Password;
