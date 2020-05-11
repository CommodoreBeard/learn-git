const express = require('express');

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.send( { status: 'DOWN' } );
});

app.get('/greeting', (req, res) => {
  const name = req.query.name;
  res.send( { message: `Hi, ${name}` } );
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;