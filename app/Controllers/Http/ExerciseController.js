'use strict'

const Exercise = use('App/Models/Exercise')

class ExerciseController {

  async getList ({ request, response }) {
    const { search } = request.all()

    const list = Exercise.query()
      .select('id', 'title', 'image', 'category', 'type', 'video', 'description')

    if (search && search !== 'undefined') {
      list
        .whereRaw('LOWER(title) LIKE :q', {
          q: `%${search.toLowerCase()}%`,
        })
    }

    const exercises = await list
      .orderBy(['title', 'id'])
      .fetch()

    return response
      .status(200)
      .send({
        result: exercises,
        message: '',
      })
  }

  async create ({ request, response }) {
    const {
      title,
      image,
      category,
      type,
      video,
      description,
    } = request.all()

    const exerciseModel = {
      title,
      image,
      category,
      type,
      video,
      description,
    }

    const exercise = await Exercise.create(exerciseModel)

    return response
      .status(200)
      .send(exercise)
  }

  async get ({ params, response }) {
    const exercise = await Exercise.find(params.id)

    if (!exercise) {
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
        result: exercise,
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

    let exercise = await Exercise
      .query()
      .where('id', params.id)
      .first()

    if (!exercise) {
      return response
        .status(404)
        .send({
          result: 'error',
          message: 'Not found',
        })
    }

    const data = request
      .only(['title', 'image', 'category', 'type', 'video', 'description'])
    const updatedExercise = await Exercise
      .update(exercise, data)

    if (updatedExercise.status !== 200) {
      return response
        .status(updatedExercise.status)
        .send({
          result: updatedExercise.result,
          message: updatedExercise.message,
        })
    }

    exercise = updatedExercise.result

    return response
      .status(200)
      .send({
        result: exercise,
        message: '',
      })

  }

  async deleteExercise ({ params, response }) {
    const { id } = params

    if (!id) {
      return response
        .status(400)
        .send({
          result: 'error',
          message: 'Id is required',
        })
    }

    const exercise = await Exercise
      .query()
      .where('id', id)
      .first()

    if (!exercise) {
      return response
        .status(404)
        .send({
          result: 'error',
          message: 'Not found'
        })
    }

    const deletedExercise = await Exercise
      .deleteExercise(exercise)

    return response
      .status(deletedExercise.status)
      .send({
        result: deletedExercise.result,
        message: deletedExercise.message,
      })
  }
}

module.exports = ExerciseController
