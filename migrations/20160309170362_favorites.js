exports.up = function(knex) {
  return knex.schema.createTable('favorites', function(table) {
    table.increments()
    table.integer('user_id').unsigned().references('users.id')
    table.integer('story_id').unsigned().references('stories.id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites')
}
