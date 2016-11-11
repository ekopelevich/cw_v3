exports.up = function(knex) {
  return knex.schema.createTable('backgrounds', function(table) {
    table.increments()
    table.string('name')
    table.string('link')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('backgrounds')
}
