
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 8000;

const app = express();
const db = require('./queries');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
}); 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/links', db.getLinks);
app.post('/new', db.addLink);
app.post('/update', db.updateLink);
app.post('/remove', db.removeLink);