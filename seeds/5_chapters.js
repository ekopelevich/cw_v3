exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('chapters').insert([{
      user_id: 1,
      story_id: 2,
      title: 'Chapter One',
      body: 'stuff',
      image: 'http://www.anh-usa.org/wp-content/uploads/2015/12/chickens-web.jpg',
      state_id: 1,
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 1,
      title: 'Chapter Two',
      body: 'things',
      image: 'http://www.peta.org/wp-content/uploads/2010/06/800-pigs-in-grass1.jpg',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 3,
      story_id: 1,
      title: 'Chapter Three',
      body: 'other stuff',
      image: 'http://www.thecowsanctuary.org/photos/surprise-w350.jpg',
      state_id: 3,
      created_at: '2015-03-01',
    },{
      user_id: 3,
      story_id: 1,
      title: 'Chapter Four',
      body: 'other things',
      image: 'http://muslimmirror.com/eng/wp-content/uploads/2013/03/cows-curious.jpg',
      state_id: 2,
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 2,
      title: 'Chapter Five',
      body: 'more stuff',
      image: 'http://assets.bluechipholidays.co.uk/media/catalogs/public/downloads/preview/custom_carousel/users/102/2014/02/donkeys2.jpg/carousel.jpg',
      state_id: 2,
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 3,
      title: 'Chapter Six',
      body: 'more things',
      image: 'http://www.propersausages.com/wp-content/uploads/2015/10/turkeys-mauritius.jpg',
      state_id: 3,
      created_at: '2015-03-01',
    }]),
  ])
}
