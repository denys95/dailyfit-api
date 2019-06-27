'use strict'

const BodyCondition = use('App/Models/BodyCondition')
const { validate } = use('Validator')

class BodyConditionController {

  async get ({ params, response }) {
    const condition = await BodyCondition
      .find(params.id)

    if (!condition) {
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
        result: condition,
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

    let condition = await BodyCondition
      .query()
      .where('id', params.id)
      .first()

    if (!condition) {
      return response
        .status(404)
        .send({
          result: 'error',
          message: 'Not found',
        })
    }

    const data = request
      .only(['date', 'weight', 'height', 'chest', 'arms', 'abs', 'muscle_back', 'legs'])

    const updatedCondition = await BodyCondition
      .update(condition, data)

    if (updatedCondition.status !== 200) {
      return response
        .status(updatedCondition.status)
        .send({
          result: updatedCondition.result,
          message: updatedCondition.message,
        })
    }

    condition = updatedCondition.result

    return response
      .status(200)
      .send({
        result: condition,
        message: '',
      })
  }

  async deleteCondition ({ params, response }) {

    if (!params.id) {
      return response
        .status(400)
        .send({
          result: 'error',
          message: 'Id is required',
        })
    }

    const exercise = await BodyCondition
      .query()
      .where('id', params.id)
      .first()

    if (!exercise) {
      return response
        .status(404)
        .send({
          result: 'error',
          message: 'Not found'
        })
    }

    const deletedCondition = await BodyCondition
      .deleteExercise(exercise)

    return response
      .status(deletedCondition.status)
      .send({
        result: deletedCondition.result,
        message: deletedCondition.message,
      })
  }
}
