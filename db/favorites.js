'use strict'

var knex = require('./knex')

module.exports = {
  getUserFavorites(id){
    return knex('favorites').where('id', id).first()
  },
  setFavorite(data){
    console.log('data', data)
    return knex('favorites')
    .where('user_id', data.user_id).andWhere('story_id', data.story_id)
    .then(record => {
      if (record) {
        return knex('favorites').where('id', record.id)
        .update({user_id: data.user_id, story_id: data.story_id}, 'id')
      } else {
        return knex('favorites')
        .insert({user_id: data.user_id, story_id: data.story_id})
      }
    })
  },
}
