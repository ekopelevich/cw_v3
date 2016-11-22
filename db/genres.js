'use strict'

var knex = require('./knex')

module.exports = {
  getGenres(){
    return knex('genres')
  },
  getGenre(id){
    return knex('genres').where('id', id).first()
  },
}
