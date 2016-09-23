exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('states').insert([
      {state: 'in progress'},
      {state: 'pending'},
      {state: 'approved'},
      {state: 'rejected'},
    ]),
  ])
}
