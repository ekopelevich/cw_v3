exports.up = function(knex) {
  return knex.schema.createTable('genres', function(table) {
    table.increments()
    table.string('genre')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('genres')
}
