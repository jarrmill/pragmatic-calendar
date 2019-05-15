const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express()
const port = 3000

app.use(morgan('dev'));

app.use(express.static('./public'));

app.get('/api/history', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(data => {
      console.log('Got data!', data.data);
      res.json(data.data);
    })
    .catch(err => {
      console.error('Error!', err)
      res.json();
    });
})

app.listen(port, () => console.log(`Server listening on port ${port}`));