'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')
const ErrorCodes = use('App/Constants/ErrorCodes')
const ErrorMessages = use('App/Constants/ErrorMessages')

class AuthController {

  async register ({ request, auth, response }) {
    const {
      email,
      password,
    } = request.all();

    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required|min:8',
    }

    let errors = {}

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      validation.messages().map(({ field }) => {
        if (field === 'email') {
          errors = {
            ...errors,
            [ErrorCodes.EMAIL_VALIDATION_ERROR]: ErrorMessages[ErrorCodes.EMAIL_VALIDATION_ERROR],
          }
        }
        if (field === 'password') {
          errors = {
            ...errors,
            [ErrorCodes.PASSWORD_VALIDATION_ERROR]: ErrorMessages[ErrorCodes.PASSWORD_VALIDATION_ERROR],
          }
        }
      })

      return response
        .status(400)
        .json({ errors })
    }

    const user = new User()
    user.email = email
    user.password = password

    await user.save()
    const accessToken = await auth.generate(user, false)
    return response
      .json({
        user,
        token: accessToken.token,
      })
  }

  async login ({ request, auth, response }) {
    const email = request.input('email')
    const password = request.input('password')

    let errors = {}

    try {
      await auth.attempt(email, password)
      const user = await User.findBy('email', email)
      if (user) {
        const accessToken = await auth.generate(user)
        return response.json({
          user,
          token: accessToken.token,
        })
      } else {
        errors = {
          ...errors,
          [ErrorCodes.ACCOUNT_NOT_EXISTS]: ErrorMessages[ErrorCodes.ACCOUNT_NOT_EXISTS],
        }
        return response.status(403)
          .send({
            errors,
          })
      }
    } catch (e) {
      errors = {
        ...errors,
        [ErrorCodes.AUTHENTICATION_ERROR]: ErrorMessages[ErrorCodes.AUTHENTICATION_ERROR],
        [ErrorCodes.AUTHORIZATION_ERROR]: ErrorMessages[ErrorCodes.AUTHORIZATION_ERROR],
      }
      return response.status(400)
        .send({
          errors,
        })
    }
  }

  async logout ({ response, auth }) {
    await auth
      .authenticator('jwt')
      .revokeTokens(true)
    return response.status(200)
      .json({
        message: 'Logout success',
      })
  }
}

module.exports = AuthController
