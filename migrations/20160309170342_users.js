exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('location')
    table.text('bio')
    table.string('avatar')
    table.boolean('isBanned')
    table.boolean('isActive')
    table.timestamps()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
