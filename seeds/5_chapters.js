exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('chapters').insert([{
      user_id: 1,
      story_id: 2,
      title: 'Chapter One',
      body: 'stuff',
      image: 'http://imgs.xkcd.com/comics/mysteries.png',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 1,
      title: 'Chapter Two',
      body: 'things',
      image: 'http://imgs.xkcd.com/comics/mysteries.png',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 3,
      story_id: 1,
      title: 'Chapter Three',
      body: 'other stuff',
      image: 'http://imgs.xkcd.com/comics/mysteries.png',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 3,
      story_id: 1,
      title: 'Chapter Four',
      body: 'other things',
      image: 'http://imgs.xkcd.com/comics/mysteries.png',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 2,
      title: 'Chapter Five',
      body: 'more stuff',
      image: 'http://imgs.xkcd.com/comics/mysteries.png',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 3,
      title: 'Chapter Six',
      body: 'more things',
      image: 'http://imgs.xkcd.com/comics/mysteries.png',
      state_id: 3,
      created_at: '2015-03-01',
    }]),
  ])
}
