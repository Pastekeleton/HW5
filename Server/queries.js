const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'favlinks',
  password: '0Gazeller3d1',
  port: 5432,
})

const addLink = (id, name, URL) => {
  pool.query('INSERT INTO links(id, name, URL) VALUES ${(id, name, URL)}', (error, result)=>{
    if (error){
      throw error;
    }
    res.status(200).json(result.rows)
  })
}

const getLinks = (req, res) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
    if (error){
      throw error;
    }
    res.status(200).json(result.rows)
  })
}

const updateLink = (id, name, URL, newid, newName, newURL) => {
  pool.query('UPDATE links SET id = 'newid' SET name = 'newName' SET URL = 'newURL' WHERE id = 'id' WHERE name = 'name' WHERE URL = 'URL'', (error, result)=>{
    if (error){
      throw error;
    }
    res.status(200).json(result.rows)
  })
}

const removeLink = (id, name, URL) => {
  pool.query('DELETE FROM links WHERE linkName= 'name' linkid = 'id' linkURL = 'URL'', (error, result)=>{
    if (error){
      throw error;
    }
    res.status(200).json(result.rows)
  })
}

module.exports = {
  getLinks,
}