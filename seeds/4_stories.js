exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('stories').insert([
      {
        user_id: 1,
        parent_id: null,
        genre_id: 1,
        title: 'The Tale of the Lost Puppy',
        summary: 'A puppy get\'s lost. Oh no!',
        cover: 'http://imgs.xkcd.com/comics/mysteries.png',
        isLocked: false,
        isActive: true,
        created_at: '2016-08-23',
        updated_at: '2016-08-24',
      },{
        user_id: 1,
        parent_id: 1,
        genre_id: 6,
        title: 'Galvanize and the Three Bears',
        summary: 'A group of full stack students move in with three bears',
        cover: 'http://imgs.xkcd.com/comics/mysteries.png',
        isLocked: false,
        isActive: true,
        created_at: '2016-08-23',
        updated_at: '2016-08-25',
      },{
        user_id: 3,
        parent_id: null,
        genre_id: 4,
        title: 'Galvanize and the Three Beers',
        summary: 'A group of full stack students fight to the death over three beers.',
        cover: 'http://imgs.xkcd.com/comics/mysteries.png',
        isLocked: false,
        isActive: true,
        created_at: '2016-08-23',
        updated_at: '2016-08-26',
      },
    ]),
  ])
}
