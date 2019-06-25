'use strict'

const Schema = use('Schema')

class WorkoutSchema extends Schema {
  up () {
    this.create('workouts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('template_id').unsigned().references('id').inTable('templates').onDelete('cascade')
      table.decimal('total_volume')
      table.decimal('total_time')
      table.integer('exercise_id').unsigned().references('id').inTable('exercises').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('workouts')
  }
}

module.exports = WorkoutSchema
