exports.up = function(knex) {
  return knex.schema.createTable('notifications', function(table) {
    table.increments()
    table.string('name')
    table.text('body')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notifications')
}
