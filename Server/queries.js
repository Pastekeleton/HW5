const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'favlinks',
  password: '0Gazeller3d1',
  port: 5432,
})