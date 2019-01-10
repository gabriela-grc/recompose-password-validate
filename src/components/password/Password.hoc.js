import { compose, withHandlers, withState } from 'recompose'

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
      setHasSixCharacter,
      toggleDisabled
    }) => text => {
      setHasLowerCase(hasLowerCaseRule.test(text));
      setHasUpperCase(hasUpperCaseRule.test(text));
      setHasSpecialCharacter(hasSpecialCharacterRule.test(text));
      setHasNumber(hasNumberRule.test(text));
      setHasSixCharacter(hasSixCharacterRule.test(text));
      toggleDisabled()
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

export default enhance