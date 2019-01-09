import React from 'react';
import ReactDOM from 'react-dom';
import { compose, withHandlers, withState } from 'recompose';
import { Item } from "./Password.style"

const hasLowerCaseRule = /[a-z]{1,}/;
const hasUpperCaseRule = /[A-Z]{1,}/;
const hasSpecialCharacterRule = /[!-/?<>=:;@]{1,}/;
const hasNumberRule = /[\d]{1,}/;
const hasSixCharacterRule = /^(.){6,}$/;

const enhance = compose(
    withState('hasLowerCase', 'setHasLowerCase', false),
    withState('hasUpperCase', 'setHasUpperCase', false),
    withState('hasSpecialCharacter', 'setHasSpecialCharacter', false),
    withState('hasNumber', 'setHasNumber', false),
    withState('hasSixCharacter', 'setHasSixCharacter', false),
    withState('isDisabled', 'setIsDisabled', false),
    withHandlers({
        toggleColor: ({
            setHasLowerCase,
            setHasUpperCase,
            setHasSpecialCharacter,
            setHasNumber,
            setHasSixCharacter
        }) => text => {
            setHasLowerCase(hasLowerCaseRule.test(text));
            setHasUpperCase(hasUpperCaseRule.test(text));
            setHasSpecialCharacter(hasSpecialCharacterRule.test(text));
            setHasNumber(hasNumberRule.test(text));
            setHasSixCharacter(hasSixCharacterRule.test(text));
        },
        toggleDisabled: ({
            hasLowerCase,
            hasUpperCase,
            hasSpecialCharacter,
            hasNumber,
            hasSixCharacter,
            setIsDisabled
        }) => () => {
            setIsDisabled(hasLowerCase && hasUpperCase && hasSpecialCharacter && hasNumber && hasSixCharacter)
        }
    })
);

const Components = enhance(({
    toggleColor,
    isDisabled,
    hasSixCharacter,
    hasNumber,
    hasSpecialCharacter,
    hasUpperCase,
    hasLowerCase,
    toggleDisabled
}) => (
        <div>
            <input
                type="password"
                id="text"
                onChange={e => toggleColor(e.target.value) || toggleDisabled()}
            />
            <br />
            <br />
            <button
                type="submit"
                disabled={!isDisabled}>
                Enviar
          </button>
            <ul>
                <Item truth={hasSixCharacter}>Ter no mínimo 6 caracteres</Item>
                <Item truth={hasNumber}>Pelo menos um número</Item>
                <Item truth={hasSpecialCharacter}>Pelo menos um caracter especial</Item>
                <Item truth={hasUpperCase}>Pelo uma letra maiúscula</Item>
                <Item truth={hasLowerCase}>Pelo uma letra minuscula</Item>
            </ul>
        </div>
    )
);

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
