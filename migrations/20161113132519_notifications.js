exports.up = function(knex) {
  return knex.schema.createTable('notifications', function(table) {
    table.increments()
    table.string('title')
    table.text('body')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notifications')
}
