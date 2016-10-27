'use strict'

var knex = require('./knex')

module.exports = {
  getStoryChapters(storyId){
    return knex('chapters').where('chapters.story_id', storyId)
  },
  getUserChapters(userId){
    return knex('chapters').where('chapters.user_id', userId)
  },
  getPendingChapters(id, type){
    if (type === 'mine') return knex('chapters').where('chapters.state_id', 2).andWhere('chapters.user_id', id)
    else if (type === 'others') {
      return knex('stories')
      .join('chapters', 'chapters.story_id', 'stories.id')
      .select('stories.user_id', 'chapters.title', 'chapters.id').where('stories.user_id', id)
    }
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
