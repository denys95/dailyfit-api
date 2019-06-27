'use strict'

const Model = use('Model')

class BodyCondition extends Model {

  static async create (data) {
    try {
      const bodyCondition = new BodyCondition()
      bodyCondition.user_id = data.user_id
      bodyCondition.date = data.date
      bodyCondition.weight = data.weight
      bodyCondition.height = data.height
      bodyCondition.chest = data.chest
      bodyCondition.arms = data.arms
      bodyCondition.abs = data.abs
      bodyCondition.muscle_back = data.muscle_back
      bodyCondition.legs = data.legs
      await bodyCondition.save()

      return {
        status: 201,
        result: bodyCondition,
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

  static async update (condition, data) {
    try {
      condition.merge(data)
      await condition.save()
      return {
        status: 200,
        result: condition,
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

  static async deleteCondition (condition) {
    try {
      condition.delete()
      return {
        status: 204,
        result: 'Body condition was deleted successfully',
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
}

module.exports = BodyCondition
