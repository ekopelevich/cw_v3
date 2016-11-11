exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('preferences').del(),
    knex('backgrounds').del(),
    knex('fonts').del(),
    knex('comments').del(),
    knex('favorites').del(),
    knex('chapters').del(),
    knex('stories').del(),
    knex('users').del(),
    knex('states').del(),
    knex('genres').del(),
  ])
}
