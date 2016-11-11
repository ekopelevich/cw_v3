exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('fonts').insert([
      {
        name: 'Lato',
        type: 'sans-serif',
      },{
        name: 'Roboto Mono',
        type: 'monospace',
      },{
        name: 'Open Sans',
        type: 'sans-serif',
      },
      {
        name: 'Raleway',
        type: 'sans-serif',
      }]),
  ])
}
