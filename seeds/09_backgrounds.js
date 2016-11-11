exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('backgrounds').insert([
      {
        name: 'Blue Note',
        link: '/assets/main/blue_note.png',
      },{
        name: 'Yellow Note',
        link: '/assets/main/yellow_note.png',
      },{
        name: 'Rice Paper',
        link: '/assets/main/rice_paper.png',
      },
      {
        name: 'Comic Book',
        link: '/assets/main/comic_book.png',
      }]),
  ])
}
