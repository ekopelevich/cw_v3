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
  findOrCreate(user) {
    const twitterUser = user
    return knex('users')
    .where('users.id', user.id).first()
    .then(user => {
      if (user) return user
      const cwUser = {
        id: twitterUser.id,
        first_name: twitterUser.displayName.split(' ')[0],
        last_name: twitterUser.displayName.split(' ')[1],
        email: '',
        location: '',
        bio: '',
        avatar: twitterUser.photos[0].value,
        isBanned: false,
        isActive: true,
      }
      return knex('users')
      .insert(cwUser, '*')
    })
  },
  updateUser(user) {
    return knex('users')
    .where('users.id', user.id)
    .then((user) => {
      if (!user) 'This user does not exist'
      return knex('users')
      .where('users.id', user.id)
      .update(user, 'id')
    })

  },
  deleteUser(id){
    return knex('users')
    .where('users.id', id)
    .del()
  },
}
