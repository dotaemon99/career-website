import * as ActionTypes from '../constants/ActionTypes'
import validator from 'validator'

export const validateEmail = (email: string, page: string) => {
  const isValid = validator.isEmail(email)
  switch (page) {
    case 'LOGIN':
      return isValid ? validLoginEmail() : invalidLoginEmail()
    default:
      throw Error
  }
}

export const isEmpty = (text: string, component: string) => {
  const isEmpty = validator.isEmpty(text)
  switch (component) {
    case 'LOGIN_PASSWORD':
      return isEmpty ? invalidLoginPassword() : validLoginPassword()
    default:
      throw Error
  }
}

export const validLoginEmail = () => {
  return { type: ActionTypes.VALID_LOGIN_EMAIL }
}

export const validLoginPassword = () => {
  return { type: ActionTypes.VALID_LOGIN_PASSWORD }
}

export const invalidLoginEmail = () => {
  return { type: ActionTypes.INVALID_LOGIN_EMAIL }
}

export const invalidLoginPassword = () => {
  return { type: ActionTypes.INVALID_LOGIN_PASSWORD }
}