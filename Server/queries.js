const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'favlinks',
  password: '0Gazeller3d1',
  port: 5432,
})

const addLink = (request, response) => {
  const name = request.body.name
  const URL = request.body.URL
  
  pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', 
  [name, URL], 
  (error, results) =>{
    if (error) {
      throw error;
    }
    response.status(201).send(`Link added with ID: ${results.insertId}`)
  },
  )
}

const getLinks = (request, response) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
    if (error){
      throw error;
    }
    res.status(200).json(result.rows)
  })
}

const updateLink = (request, response) => {
  const id = request.body.id
  const newName = response.body.name
  const newURL = response.body.URL

  pool.query('UPDATE links SET name = $1 SET URL = $2 WHERE id = $3', 
  [newName, newURL, id], 
  (error, results) =>{
    if (error) {
      throw error;
    }
    response.status(201).send(`Link updated`)
  },
  )
}

const removeLink = (request, response) => {
  const id = request.body.id

  pool.query('DELETE FROM links WHERE id = $1', 
  [id], 
  (error, results) =>{
    if (error) {
      throw error;
    }
    response.status(201).send(`Link removed`)
  },
  )
}

module.exports = {
  getLinks,
  addLink,
  updateLink,
  removeLink
}