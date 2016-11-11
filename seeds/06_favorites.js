exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('favorites').insert([
      {
        user_id: 1,
        story_id: 2,
      },{
        user_id: 2,
        story_id: 1,
      },{
        user_id: 3,
        story_id: 2,
      },{
        user_id: 1,
        story_id: 3,
      },{
        user_id: 3,
        story_id: 1,
      },{
        user_id: 4,
        story_id: 2,
      }]),
  ])
}
