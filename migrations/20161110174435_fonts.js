exports.up = function(knex) {
  return knex.schema.createTable('fonts', function(table) {
    table.increments()
    table.string('name')
    table.string('type')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fonts')
}
