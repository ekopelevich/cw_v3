exports.up = function(knex) {
  return knex.schema.createTable('stories', function(table) {
    table.increments()
    table.integer('user_id').unsigned().references('users.id')
    table.integer('parent_id').unsigned().references('stories.id')
    table.integer('genre_id').unsigned().references('genres.id')
    table.string('title')
    table.text('summary')
    table.string('cover_image')
    table.boolean('isLocked')
    table.boolean('isActive')
    table.timestamps()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('stories')
}
