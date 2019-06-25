'use strict'

const Schema = use('Schema')

class TemplateSchema extends Schema {
  up () {
    this.create('templates', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.string('name', 255)
      table.string('description', 255)
      table.string('color', 6)
      table.integer('exercise_id').unsigned().references('id').inTable('exercises').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('templates')
  }
}

module.exports = TemplateSchema
