if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cw_db',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/cw_db_test',
    // debug: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
}
