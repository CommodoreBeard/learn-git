const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
const port = 3000;

app.get('/health', (req, res) => {
  res.send( { status: 'UP' } );
});

app.post('/greeting', (req, res) => {
  const name = req.body.name;
  res.send( { message: `Hi, ${name}` } );
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;