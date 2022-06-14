/*
    Proxy server used for api calls. Uses express for backend and axios for api calling
*/

const express = require('express');
const axios = require('axios');

// create express backend
const app = express();

// test call
app.get('/test', (req, res) => {
  res.json({message: "Hello from server"})
})

// call to nextrip to get available routes
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

// passes in a route id to get possible route directions
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

// passes in route id and direction to get the stops on the route path
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

// passes in a route id, direction and stop to get train times
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

// passes in specific stop id to get train times
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

// local host port used for backend
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});