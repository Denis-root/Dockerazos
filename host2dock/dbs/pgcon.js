const { Pool } = require('pg')


const poolDockPg = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: 'D1234',
  port: 5432,
})

module.exports = { poolDockPg };