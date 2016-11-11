exports.up = function(knex) {
  return knex.schema.createTable('preferences', function(table) {
    table.increments()
    table.integer('user_id').unsigned().references('users.id')
    table.integer('font_id').unsigned().references('fonts.id')
    table.integer('background_id').unsigned().references('backgrounds.id')
    table.boolean('text_notifications')
    table.boolean('email_notifications')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('preferences')
}
