exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table) {
    table.increments()
    table.integer('user_id').unsigned().references('users.id')
    table.integer('chapter_id').unsigned().references('chapters.id')
    table.text('body')
    table.timestamp('created_at')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
}
