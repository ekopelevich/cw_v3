'use strict'

var knex = require('./knex')

module.exports = {

  getAllUsers(){
    return knex('users')
  },
  getUser(id) {
    return knex('users')
    .where('users.id', id).first()
  },
  createUser(user) {
    return knex('users').insert(user)
  },
  updateUser(user) {
    return knex('users')
    .where('users.id', user.id)
    .update(user)
  },
  deleteUser(id){
    return knex('users')
    .where('users.id', id)
    .del()
  },
  getAllStories(){
  return knex('stories')
    .join('users', 'stories.user_id', 'users.id')
    .select()
  },
  getStory(id){
    return knex('stories')
    .join('users', 'stories.user_id', 'users.id')
    .select()
    .where('stories.id', id).first()
  },
  createStory(story){
    return knex('stories').insert(story)
  },
  updateStory(story){
    return knex('stories')
    .where('stories.id', story.id)
    .update(story)
  },
  deleteStory(id){
    return knex('stories').del()
      .where('stories.id', id)
  },
  getAllChapters(storyId){
    return knex('chapters')
    .join('stories', 'chapters.story_id', 'stories.id')
    .select()
    .where('stories.id', storyId)
  // return knex('stories')
  //   .join('chapters', 'chapters.story_id', 'stories.id')
  //   .select('stories.id as storyId')
  //   .where(storyId, 'stories.id')
  },
}
