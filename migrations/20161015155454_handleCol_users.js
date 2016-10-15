exports.up = function(knex) {
  return knex.schema.table('users', function(table) {
    table.boolean('handle')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
