export const validateHasLowerCase = text => {
  const hasLowerCaseRule = /[a-zà-û]{1,}/

  if (hasLowerCaseRule.test(text)) {
    return true
  }

  return false
}

export const validateHasUpperCase = text => {
  const hasUpperCaseRule = /[A-ZÀ-Û]{1,}/

  if (hasUpperCaseRule.test(text)) {
    return true
  }

  return false
}

export const validateHasSpecialCharacter = text => {
  const hasSpecialCharacterRule = /[^a-zà-ûA-ZÀ-Û0-9 ]{1,}/

  if (hasSpecialCharacterRule.test(text)) {
    return true
  }

  return false
}

export const validateHasNumber = text => {
  const hasNumberRule = /[\d]{1,}/

  if (hasNumberRule.test(text)) {
    return true
  }

  return false
}

export const validateHasSixCharacter = text => {
  const hasSixCharacterRule = /^.{6,}$/

  if (hasSixCharacterRule.test(text)) {
    return true
  }

  return false
}