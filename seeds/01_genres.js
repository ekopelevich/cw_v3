exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('genres').insert([
      {genre: 'Let\'s see what happens!'},
      {genre: 'children\'s'},
      {genre: 'comedy'},
      {genre: 'drama'},
      {genre: 'fantasy'},
      {genre: 'historical fiction'},
      {genre: 'horror'},
      {genre: 'mystery'},
      {genre: 'romance'},
      {genre: 'satire'},
      {genre: 'science fiction'},
      {genre: 'tragedy'},
    ]),
  ])
}
