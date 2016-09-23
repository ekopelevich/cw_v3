exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('states').insert([
      {state: 'in progress'},
      {state: 'submitted'},
      {state: 'approved'},
      {state: 'rejected'},
    ]),
  ])
}
