'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {

  static get hidden () {
    return [
      'password'
    ]
  }

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static async update (user, data) {
    try {
      user.merge(data)
      await user.save()
      return {
        status: 200,
        result: user,
        message: '',
      }
    } catch (e) {
      return {
        status: 500,
        result: 'error',
        message: e.code,
      }
    }
  }

  static async deleteUser (user) {
    try {
      user.delete()
      return {
        status: 204,
        result: 'User was deleted successfully',
        message: '',
      }
    } catch (e) {
      return {
        status: 500,
        result: 'error',
        message: e.code,
      }
    }
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
