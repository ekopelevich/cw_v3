'use strict'

var knex = require('./knex')

module.exports = {
  getGenre(id){
    return knex('genres').where('id', id).first()
  },
}
