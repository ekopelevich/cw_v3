'use strict'

var knex = require('./knex')

module.exports = {
  getStoryChapters(storyId){
    return knex('chapters').where('chapters.story_id', storyId)
  },
  getUserChapters(userId){
    return knex('chapters').where('chapters.user_id', userId)
  },
  getChapter(id){
    return knex('chapters').where('chapters.id', id).first()
  },
  createChapter(chapter){
    return knex('chapters').insert(chapter, 'id')
  },
  updateChapter(id, chapter){
    return knex('chapters').where('chapters.id', id).update(chapter)
  },
  deleteChapter(id){
    return knex('chapters').del().where('chapters.id', id)
  },

}
