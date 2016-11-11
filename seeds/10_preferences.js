exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('preferences').insert([
      {
        user_id: 1,
        font_id: 2,
        background_id: 2,
        text_notifications: false,
        email_notifications: false,
      }, {
        user_id: 2,
        font_id: 1,
        background_id: 2,
        text_notifications: false,
        email_notifications: false,
      }, {
        user_id: 3,
        font_id: 4,
        background_id: 1,
        text_notifications: false,
        email_notifications: false,
      }, {
        user_id: 4,
        font_id: 1,
        background_id: 4,
        text_notifications: false,
        email_notifications: false,
      }]),
  ])
}
