import React from 'react'
import ReactDOM from 'react-dom'
import { compose, withHandlers, withState } from 'recompose'
import { Item } from './Password.style'
import { PASSWORD_VALIDATE } from '../../configs/messages'

const {
    HAS_SIX_CHARACTER,
    HAS_NUMBER,
    HAS_SPECIAL_CHARACTER,
    HAS_LOWER_CASE,
    HAS_UPPER_CASE
} = PASSWORD_VALIDATE

const hasLowerCaseRule = /[a-z]{1,}/
const hasUpperCaseRule = /[A-Z]{1,}/
const hasSpecialCharacterRule = /[!-/?<>=:;@]{1,}/
const hasNumberRule = /[\d]{1,}/
const hasSixCharacterRule = /^(.){6,}$/

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
)

const Password = enhance(({
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
            <h1>Password validate</h1>
            <input type="password" id="text" onChange={e => toggleColor(e.target.value) || toggleDisabled()} />
            <br />
            <br />
            <button type="submit" disabled={!isDisabled}>Enviar</button>
            <ul>
                <Item truth={hasSixCharacter}>{HAS_SIX_CHARACTER}</Item>
                <Item truth={hasNumber}>{HAS_NUMBER}</Item>
                <Item truth={hasSpecialCharacter}>{HAS_SPECIAL_CHARACTER}</Item>
                <Item truth={hasLowerCase}>{HAS_LOWER_CASE}</Item>
                <Item truth={hasUpperCase}>{HAS_UPPER_CASE}</Item>
            </ul>
        </div>
    )
)

export default Password
