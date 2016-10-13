'use strict'

var knex = require('./knex')

module.exports = {
  getAllStories(){
  return knex('stories')
    .join('users', 'stories.user_id', 'users.id')
    .join('genres', 'stories.genre_id', 'genres.id')
    .select('stories.id as storyId', 'stories.parent_id as parentId', 'genres.genre as genre', 'stories.title as title', 'stories.summary as summary', 'stories.cover as coverImage', 'stories.created_at as createdAt', 'stories.updated_at as updatedAt', 'users.first_name as firstName', 'users.last_name as lastName', 'users.location as userLocation', 'users.avatar as avatar')
  },
  getStory(id){
    console.log('id', id)
    return knex('stories')
    .join('users', 'stories.user_id', 'users.id')
    .join('genres', 'stories.genre_id', 'genres.id')
    .select('stories.id as storyId', 'stories.parent_id as parentId', 'genres.genre as genre', 'stories.title as title', 'stories.summary as summary', 'stories.cover as coverImage', 'stories.created_at as createdAt', 'stories.updated_at as updatedAt', 'users.first_name as firstName', 'users.last_name as lastName', 'users.location as userLocation', 'users.avatar as avatar')
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
  },
}
