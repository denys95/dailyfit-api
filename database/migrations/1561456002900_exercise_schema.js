'use strict'

const Schema = use('Schema')

class ExerciseSchema extends Schema {
  up () {
    this.create('exercises', (table) => {
      table.increments()
      table.string('title', 255)
      table.string('image', 255)
      table.string('category', 255)
      table.string('type', 255)
      table.string('video', 255)
      table.string('description', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('exercises')
  }
}

module.exports = ExerciseSchema
