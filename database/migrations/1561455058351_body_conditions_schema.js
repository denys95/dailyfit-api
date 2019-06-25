'use strict'

const Schema = use('Schema')

class BodyConditionsSchema extends Schema {
  up () {
    this.create('body_conditions', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.date('date')
      table.decimal('weight')
      table.decimal('height')
      table.decimal('chest')
      table.decimal('arms')
      table.decimal('abs')
      table.decimal('muscle_back')
      table.decimal('legs')
      table.timestamps()
    })
  }

  down () {
    this.drop('body_conditions')
  }
}

module.exports = BodyConditionsSchema
