import React from 'react'
import { Item } from './Password.style'
import { PASSWORD_VALIDATE } from '../../configs/messages'

const {
	HAS_SIX_CHARACTER,
	HAS_NUMBER,
	HAS_SPECIAL_CHARACTER,
	HAS_LOWER_CASE,
	HAS_UPPER_CASE
} = PASSWORD_VALIDATE

const Password = (({
	toggleColor,
	toggleDisabled,
	isDisabled,
	hasSixCharacter,
	hasNumber,
	hasSpecialCharacter,
	hasLowerCase,
	hasUpperCase
}) => (
		<div>
			<h1>Password validate</h1>
			<input type="password" data-testid="text" onChange={event => toggleColor(event.target.value) || toggleDisabled()} />
			<br />
			<br />
			<button type="submit" data-testid="submit" disabled={!isDisabled}>Enviar</button>
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
