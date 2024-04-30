const { Pool } = require('pg')


const poolDockPg = new Pool({
  user: 'postgres',
  host: 'poc1-postgres',
  database: 'postgres',
  password: 'D1234',
  port: 5432,
})

module.exports = { poolDockPg };