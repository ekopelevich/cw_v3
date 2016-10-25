'use strict'

var knex = require('./knex')

module.exports = {
  setFavorite(data){
    return knex('favorites')
    .where('user_id', data.user_id).andWhere('story_id', data.story_id).first()
    .then(record => {
      if (record) return knex('favorites').where('id', record.id).first().del()
      else return knex('favorites').insert({user_id: data.user_id, story_id: data.story_id})
    })
  },
}
