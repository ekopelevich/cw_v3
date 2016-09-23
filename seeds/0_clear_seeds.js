exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('favorites').del(),
    knex('chapters').del(),
    knex('stories').del(),
    knex('users').del(),
    knex('states').del(),
    knex('genres').del(),
  ])
}
