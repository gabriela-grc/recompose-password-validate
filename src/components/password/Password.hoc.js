import { compose, withHandlers, withState } from 'recompose'
import {
  validateHasLowerCase,
  validateHasUpperCase,
  validateHasNumber,
  validateHasSpecialCharacter,
  validateHasSixCharacter
} from '../../utils/validatePassword'

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
    }) => text => {
      setHasLowerCase(validateHasLowerCase(text))
      setHasUpperCase(validateHasUpperCase(text))
      setHasSpecialCharacter(validateHasSpecialCharacter(text))
      setHasNumber(validateHasNumber(text))
      setHasSixCharacter(validateHasSixCharacter(text))
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
