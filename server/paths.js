const express = require('express');
const axios = require('axios');

const router = express('router');

app.get('/routes', (req, res) => {
  axios({
    method: 'GET',
    url: 'http://svc.metrotransit.org/NexTrip/Routes',
  }).then(response => {
    console.log(response);
    res.send(response.data)
  }).catch(error => {
    console.log('error making request', error);
    res.sendStatus(500)
  })
})