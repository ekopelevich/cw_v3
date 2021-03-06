'use strict'

var knex = require('./knex')

module.exports = {
  getAllUsers(){
    return knex('users')
  },
  getUser(id) {
    return knex('users').where('users.id', id).first()
  },
  findOrCreate(profile, token, tokenSecret) {
    return knex('users')
    .where('users.twitter_id', profile.id).first()
    .then(user => {
      if (!user) return this.createUser(profile, token, tokenSecret)
      else return this.setTokens(user, profile, token, tokenSecret)
    })
  },
  createUser(profile, token, tokenSecret) {
    const newUser = {
      first_name: profile._json.name.split(' ')[0],
      last_name: profile._json.name.split(' ')[1],
      username: profile._json.screen_name,
      location: profile._json.location,
      bio: profile._json.description,
      avatar: profile._json.profile_image_url,
      twitter_id: profile._json.id,
      twitter_token: token,
      twitter_secret: tokenSecret,
    }
    return knex('users').returning('*').insert(newUser)
  },
  setTokens(user, profile, token, tokenSecret){
    const twitterTokens = {
      twitter_token: token,
      twitter_secret: tokenSecret,
    }
    return knex('users').where('users.id', user.id).update(twitterTokens, '*')
  },
  updateUser(id, user) {
    return knex('users').where('users.id', id).update(user, 'id')
  },
  deleteUser(id){
    return knex('users').where('users.id', id).del()
  },
  getFavoritesByUser(id){
    return knex('favorites').where('favorites.user_id', id)
  },
}
