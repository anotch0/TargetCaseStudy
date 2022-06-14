const express = require('express');
const axios = require('axios');

const app = express();

app.get('/test', (req, res) => {
  res.json({message: "Hello from server"})
})

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

app.get('/directions/:route', (req, res) => {
  axios({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/Directions/' + req.params.route,
  }).then(response => {
      console.log(response);
      res.send(response.data)
  }).catch(error => {
      console.log('error making request', error);
      res.sendStatus(500)
  })
})

app.get('/stops/:route/:direction', (req, res) => {
  axios({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/Stops/' + req.params.route+'/'+req.params.direction,
  }).then(response => {
      console.log(response);
      res.send(response.data)
  }).catch(error => {
      console.log('error making request', error);
      res.sendStatus(500)
  })
})

app.get('/nextrip/:route/:direction/:stop', (req, res) => {
  axios({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/' + req.params.route+'/'+req.params.direction + '/' + req.params.stop,
  }).then(response => {
      console.log(response);
      console.log(response.data);
      res.send(response.data)
  }).catch(error => {
      console.log('error making request', error);
      res.sendStatus(500)
  })
})

app.get('/NexTrip/:stopid', (req, res) => {
  axios({
      method: 'GET',
      url: 'http://svc.metrotransit.org/NexTrip/' + req.params.stopid,
  }).then(response => {
      console.log(response);
      res.send(response.data)
  }).catch(error => {
      console.log('error making request', error);
      res.sendStatus(500)
  })
})


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});