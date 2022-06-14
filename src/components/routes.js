import React, { Component, useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'

import { useSelector, useDispatch } from 'react-redux'
import { setSelectedRoute } from '../redux/slices/selectedRouteSlice.js';
import { setSelectedDirection } from '../redux/slices/selectedDirectionSlice.js';
import { setSelectedStop } from '../redux/slices/selectedStopSlice.js';
import { setTrips, emptyTrips } from '../redux/slices/tripsSlice';

function Routes() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState([]);
  //const [route, setRoute] = useState(null);
  const [directions, setDirections] = useState(null);
  //const [direction, setDirection] = useState(null);
  const [stops, setStops] = useState(null);
  //const [stop, setStop] = useState(null);
  const [times, setTimes] = useState(null);

  const route = useSelector(state => state.route.value);
  const direction = useSelector(state => state.direction.value);
  const stop = useSelector(state => state.stop.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/routes')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log(data);
        setRoutes(data.map((data) => {
          return {
            key: data.Description,
            value: data.Route,
            text: data.Description
          }
        }));
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) { return "Loading..." }
  if (error) { return "Error!" }

  const handleRoute = (e, { value }) => {
    console.log(value);
    //setRoute(value);
    dispatch(setSelectedRoute(value));
    getDirections(value);
  }

  const handleDirection = (e, { value }) => {
    console.log(value);
    dispatch(setSelectedDirection(value));
    getStops(route, value);
  }

  const handleStops = (e, { value }) => {
    console.log(value);
    dispatch(emptyTrips());
    dispatch(setSelectedStop(value));
    getTrips(route, direction, value);
  }


  const getDirections = (route) => {
    fetch('/directions/' + route)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log(data);
        setDirections(data.map((data) => {
          return {
            key: data.Value,
            value: data.Value,
            text: data.Text
          }
        }));
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const getStops = (route, direction) => {
    fetch('/stops/' + route + '/' + direction)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log(data);
        setStops(data.map((data) => {
          return {
            key: data.Value,
            value: data.Value,
            text: data.Text
          }
        }));
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
  }

  const getTrips = (route, direction, stop) => {
    fetch('/nextrip/' + route + '/' + direction + '/' + stop)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log(data);
        dispatch(setTrips(data));
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
  }

  return (
    <>
      <Dropdown
        placeholder='Select Route'
        fluid
        search
        selection
        options={routes}
        onChange={handleRoute}
      />
      <Dropdown
        placeholder='Select Direction'
        fluid
        search
        selection
        options={directions}
        onChange={handleDirection}
      />
      <Dropdown
        placeholder='Select Stop'
        fluid
        search
        selection
        options={stops}
        onChange={handleStops}
      />
    </>
  )
}

export default Routes;