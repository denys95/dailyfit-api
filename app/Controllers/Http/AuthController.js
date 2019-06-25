'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class AuthController {

  async register ({ request, auth, response }) {
    const {
      email,
      password,
    } = request.all();

    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required',
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      // validation fails informs about only one problem at a time
      return response.status(400)
        .json({
          type: 'error',
          message: validation.messages()
            .map(item => item.message)
            .join(', ')
        })
    }

    const user = new User()
    user.email = email
    user.password = password

    await user.save()
    const accessToken = await auth.generate(user, false)
    return response.json({
      user,
      token: accessToken.token,
    })
  }

  async login ({ request, auth, response }) {
    const email = request.input('email')
    const password = request.input('password')
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
        return response.status(403)
          .send({
            type: 'error',
            message: 'You don\'t have access to this section',
          })
      }
    } catch (e) {
      return response.status(400)
        .json({
          type: 'error',
          message: 'You need to register first!',
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
