exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert([
      {
        first_name: 'Elana',
        last_name: 'Kopelevich',
        email: 'ekopelevich@gmail.com',
        location: 'Denver, CO',
        bio: 'super duper cool',
        avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
        isBanned: false,
        isActive: true,
        created_on: '2015-02-01',
        edited_on: '2015-02-01',
      }, {
        first_name: 'Shad',
        last_name: 'Self',
        email: 'shadself@gmail.com',
        location: 'Denver, CO',
        bio: 'super duper extremely awesome and cool',
        avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
        isBanned: false,
        isActive: true,
        created_on: '2015-03-01',
        edited_on: '2015-03-01',
      }, {
        first_name: 'Robert',
        last_name: 'Dinero',
        email: 'robby@gmail.com',
        location: 'Los Angelos, CA',
        bio: 'super duper extremely awesome and cool',
        avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
        isBanned: false,
        isActive: true,
        created_on: '2015-03-01',
        edited_on: '2015-03-01',
      }, {
        first_name: 'Annakin',
        last_name: 'Skywalker',
        email: 'sw@gmail.com',
        location: 'Boulder, CO',
        bio: 'super duper extremely awesome and cool',
        avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
        isBanned: false,
        isActive: true,
        created_on: '2015-03-01',
        edited_on: '2015-03-01',
      },
    ]),
  ])
}