exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments()
    table.string('first_name')
    table.string('last_name')
    table.string('username')
    table.string('email')
    table.string('phone')
    table.string('location')
    table.string('tag_line')
    table.text('bio')
    table.string('avatar')
    table.boolean('is_banned')
    table.boolean('is_admin')
    table.integer('twitter_id')
    table.integer('facebook_id')
    table.integer('google_id')
    table.string('twitter_token')
    table.string('twitter_secret')
    table.timestamps()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
