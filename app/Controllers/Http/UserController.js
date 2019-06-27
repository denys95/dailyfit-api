'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class UserController {

  async get ({ params, response }) {
    const user = await User.find(params.id)

    if (!user) {
      return response
        .status(404)
        .send({
          result: 'error',
          message: 'Not found',
        })
    }

    return response
      .status(200)
      .send({
        result: user,
        message: '',
      })
  }

  async update ({ request, params, response }) {
    if (!params.id) {
      return response
        .status(400)
        .send({
          result: 'error',
          message: 'Id is required',
        })
    }

    let user = await User
      .query()
      .where('id', params.id)
      .first()

    if (!user) {
      return response
        .status(404)
        .send({
          result: 'error',
          message: 'Not found',
        })
    }

    const data = request
      .only(['email', 'password', 'name', 'date_of_birth', 'language'])
    const updatedUser = await User
      .update(user, data)

    if (updatedUser.status !== 200) {
      return response
        .status(updatedUser.status)
        .send({
          result: updatedUser.result,
          message: updatedUser.message,
        })
    }

    user = updatedUser.result

    return response
      .status(200)
      .send({
        result: user,
        message: '',
      })
  }
}
