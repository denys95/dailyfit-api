'use strict'

const Model = use('Model')

class Exercise extends Model {

  static async create (data) {
    try {
      const exercise = new Exercise()
      exercise.title = data.title
      exercise.category = data.category
      exercise.image = data.image
      exercise.type = data.type
      exercise.video = data.video
      exercise.description = data.description
      await exercise.save()

      return {
        status: 201,
        result: exercise,
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

  static async update (exercise, data) {
    try {
      exercise.merge(data)
      await exercise.save()
      return {
        status: 200,
        result: exercise,
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

  static async deleteExercise (exercise) {
    try {
      exercise.delete()
      return {
        status: 204,
        result: 'Exercise was deleted successfully',
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

module.exports = Exercise
