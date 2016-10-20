process.env.NODE_ENV = 'test'

const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const knex = require('../db/knex')

beforeEach(done => {
  Promise.all([
    knex('stories').insert({
      id: 1325235,
      user_id: 124234,
      parent_id: 45346,
      genre_id: 3,
      title: 'Monkey Holiday',
      summary: 'This is a story about monkeys who go on holiday to the south of Spain to find something wholly unexpected.',
      cover: 'https://primarentacartravelguide.files.wordpress.com/2013/02/gibraltar3.jpg',
      isLocked: false,
      isActive: true,
    }),
    knex('stories').insert({
      id: 1444235,
      user_id: 124234,
      parent_id: 45346,
      genre_id: 8,
      title: 'The French Connection',
      summary: 'Something very specific happens in France.',
      cover: 'http://s3.foxfilm.com/foxmovies/production/films/43/images/gallery/gallery-frenchconnection-4-gallery-image.jpg',
      isLocked: false,
      isActive: true,
    }),
    knex('stories').insert({
      id: 1556789,
      user_id: 353453,
      parent_id: null,
      genre_id: 5,
      title: 'The Bunny\'s Bicycle Ride',
      summary: 'A rabbit goes on an adventure!',
      cover: 'http://2.bp.blogspot.com/-WY7ZFy5NpHE/TbOCEIB0m7I/AAAAAAAAAes/n3Jy0owAoi8/s1600/bicycle%2Bbunny.jpg',
      isLocked: false,
      isActive: true,
    }),
  ]).then(() => done())
})

afterEach(done => knex('stories').del().then(() => done()))

describe('GET /stories', () => {
  it('responds with JSON', done => {
    request(app)
    .get('/stories')
    .expect('Content-Type', /json/)
    .expect(200, done)
    })

    it('returns an array of all story objects when responding with JSON', done => {
    request(app)
    .get('/stories')
    .end((err, res) => {
      expect(res.body).to.deep.equal([{
        id: 1325235,
        user_id: 124234,
        parent_id: 45346,
        genre_id: 3,
        title: 'Some Monkeys go to Spain',
        summary: 'This is a story about monkeys who go on holiday to the south of Spain to find something wholly unexpected.',
        cover: 'https://primarentacartravelguide.files.wordpress.com/2013/02/gibraltar3.jpg',
        isLocked: false,
        isActive: true,
      },{
        id: 1444235,
        user_id: 124234,
        parent_id: 45346,
        genre_id: 8,
        title: 'The French Connection',
        summary: 'Something very specific happens in France.',
        cover: 'http://s3.foxfilm.com/foxmovies/production/films/43/images/gallery/gallery-frenchconnection-4-gallery-image.jpg',
        isLocked: false,
        isActive: true,
      }, {
        id: 1556789,
        user_id: 353453,
        parent_id: null,
        genre_id: 5,
        title: 'The Bunny\'s Bicycle Ride',
        summary: 'A rabbit goes on an adventure!',
        cover: 'http://2.bp.blogspot.com/-WY7ZFy5NpHE/TbOCEIB0m7I/AAAAAAAAAes/n3Jy0owAoi8/s1600/bicycle%2Bbunny.jpg',
        isLocked: false,
        isActive: true,
      }])
      done()
    })
  })
})

xdescribe('GET /stories/:id', () => {
  it('responds with JSON', done => {
    request(app)
      .get('/stories')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('returns a story objects when responding with JSON', done => {
  request(app)
    .get('/stories/1')
    .end((err, res) => {
      expect(res.body).to.deep.equal({
        id: 1325235,
        user_id: 124234,
        parent_id: 45346,
        genre_id: 3,
        title: 'Some Monkeys go to Spain',
        summary: 'This is a story about monkeys who go on holiday to the south of Spain to find something wholly unexpected.',
        cover: 'https://primarentacartravelguide.files.wordpress.com/2013/02/gibraltar3.jpg',
        isLocked: false,
        isActive: true,
      })
      done()
    })
  })

})

xdescribe('POST /stories', () => {
  const newStory = {
    id: 1725359,
    user_id: 134554,
    parent_id: null,
    genre_id: 6,
    title: 'The Chickens go to Greece',
    summary: 'The chickens go to Europe to fix the economy.',
    cover: 'http://flashwallpapers.com/wp-content/uploads/2015/05/cute-chickens-love.jpg',
    isLocked: false,
    isActive: true,
  }

  it('responds with JSON', done => {
    request(app)
    .post('/stories')
    .type('form')
    .send(newStory)
    .expect('Content-Type', /json/)
    .expect(200, done)
  })

  it('adds the new story to the database', done => {
    request(app)
    .post('/stories')
    .type('form')
    .send(newStory)
    .end((err, _res) => {
      knex('stories').select().then(stories => {
        expect(stories).to.have.lengthOf(4)
        expect(stories).to.deep.include(newStory)
        done()
      })
    })
  })
})

xdescribe('PUT /stories/:id', () => {
  var updatedStory = {
    user_id: 134554,
    parent_id: null,
    genre_id: 6,
    title: 'The Curious Chickens go to Greece',
    summary: 'Some chickens go to Europe to fix the economy.',
    cover: 'http://flashwallpapers.com/wp-content/uploads/2015/05/cute-chickens-love.jpg',
    isLocked: false,
    isActive: true,
  }

  it('responds with JSON', done => {
    request(app)
      .put('/stories/1')
      .type('form')
      .send(updatedStory)
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('updates the story in the database', done => {
    request(app)
    .put('/stories/1')
    .type('form')
    .send(updatedStory)
    .end((err, _res) => {
      knex('stories').where('id', 1).first().then(story => {
        expect(story.name).to.equal(updatedStory.name)
        expect(story.age).to.equal(updatedStory.age)
        expect(story.image).to.equal(updatedStory.image)
        done()
      })
    })
  })
})

xdescribe('DELETE /stories/:id', () => {
  it('responds with JSON', done => {
    request(app)
      .delete('/stories/1')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('returns the of the deleted story id', done => {
  request(app)
    .delete('/stories/1')
    .end((err, res) => {
      expect(res.body).to.deep.equal({id: 1})
      done()
    })
  })
})
