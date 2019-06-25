'use strict'

const Exercise = use('App/Models/Exercise')

class ExerciseController {

  async getList ({ request, response }) {
    const { search } = request.all()

    const list = Exercise.query()
      .select('id', 'title', 'category', 'type', 'video', 'description')

    if (search && search !== 'undefined') {
      list
        .whereRaw('LOWER(title) LIKE :q', {
          q: `%${search.toLowerCase()}%`,
        })
    }

    const result = await list
      .orderBy(['title', 'id'])
      .fetch()

    return response
      .status(200)
      .send(result)
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
          type: 'error',
          message: 'Not found',
        })
    }

    return response
      .status(200).
      send(exercise)
  }
}

module.exports = ExerciseController
