exports.up = function(knex) {
  return knex.schema.createTable('states', function(table) {
    table.increments()
    table.string('state')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('states')
}
