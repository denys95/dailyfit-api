const codes = require('./ErrorCodes');

const messages = {
  [codes.UNKNOWN]: 'Unknown error occurred',

  [codes.AUTHENTICATION_ERROR]: 'Authentication error',
  [codes.AUTHORIZATION_ERROR]: 'Unauthorized',
  [codes.REGISTRATION_NOT_COMPLETED]: 'Registration not completed',

  [codes.REQUEST_VALIDATION_ERROR]: 'Request validation failed',
  [codes.CAPTHA_VALIDATION_ERROR]: 'ReCaptcha verification failed. Please try again',
  [codes.EMAIL_VALIDATION_ERROR]: 'Email verification failed, please use a different email address',
  [codes.EMAIL_REQUIRED]: 'Email is required',
  [codes.ACCOUNT_EXISTS]: 'Active account already exists with this email address. Go ahead and just login',
  [codes.ACCOUNT_NOT_EXISTS]: 'Account doesn\'t exist',
  [codes.ACTIVATION_DATA_NOT_EXISTS]: 'Activation data doesn\'t exist',
  [codes.PASSWORD_INPUTS_DO_NOT_MATCH]: 'Passwords don\'t match',
  [codes.PASSWORD_INPUTS_MATCH]: 'Password cannot be the same as the previous one',
  [codes.PASSWORD_REQUIRED]: 'Password is required',
  [codes.PASSWORD_LENGTH]: 'Password length must be over 8 symbols',
  [codes.PASSWORD_VALIDATION_ERROR]: 'Password validation error',
  [codes.BAD_CREDENTIALS]: 'Email or Password does not match',
  [codes.INVALID_RESET_PASSWORD_TOKEN_ERROR]: 'Reset password token is expired. Please submit a new request to reset your password',
}

module.exports = messages
