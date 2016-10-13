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
  findOrCreate(user, cb) {
    console.log(user)
    return knex('users')
    .where('users.id', user.id)
    .then(user => {
      if (user) return new Promise(() => 'This user already exists!')
      return knex('users')
      .insert(user, 'id')
    }).then((err, user) => {
      cb(err, user)
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
