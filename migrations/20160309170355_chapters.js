exports.up = function(knex) {
  return knex.schema.createTable('chapters', function(table) {
    table.increments()
    table.integer('user_id').unsigned().references('users.id')
    table.integer('story_id').unsigned().references('stories.id')
    table.string('title')
    table.text('body')
    table.string('image')
    table.integer('state_id').unsigned().references('states.id')
    table.timestamp('created_at')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('chapters')
}
