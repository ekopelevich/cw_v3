exports.up = function(knex) {
  return knex.schema.table('users', function(table) {
    table.string('twitter_token')
    table.string('twitter_secret')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
