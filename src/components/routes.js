import React, { Component, useState, useEffect } from 'react'

// import hook for router navigation
import { useNavigate } from 'react-router';

// import components from semantic ui
import { Dropdown } from 'semantic-ui-react'

// import components and slices used for redux, note: commented out imports from further implementation
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedRoute } from '../redux/slices/selectedRouteSlice.js';
import { setSelectedDirection } from '../redux/slices/selectedDirectionSlice.js';
import { setStops, emptyStops } from '../redux/slices/stopsSlice';
//import { setSelectedStop } from '../redux/slices/selectedStopSlice.js';
//import { setTrips, emptyTrips } from '../redux/slices/tripsSlice';

function Routes() {
  // states used for initial fetch call
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // states used for retrieved data
  const [routes, setRoutes] = useState([]);
  const [directions, setDirections] = useState(null);

  // redux states, commented out used for furthur implementation
  const route = useSelector(state => state.route.value);
  const direction = useSelector(state => state.direction.value);
  //const stop = useSelector(state => state.stop.value);
  //const stops = useSelector(state => state.stops);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  // initial fetch of routes when page is loaded, sets routes list
  useEffect(() => {
    fetch('/routes')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log('Routes data: ' + data);
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

  // handler for route dropdown change
  const handleRoute = (e, { value }) => {
    console.log(value, e.target.textContent);
    //setRoute(value);
    dispatch(setSelectedRoute({value: value, text: e.target.textContent}));
    getDirections(value);
  }

  // handler for direction dropdown change
  const handleDirection = (e, { value }) => {
    console.log(value, e.target.textContent);
    dispatch(emptyStops());
    dispatch(setSelectedDirection({value: value, text: e.target.textContent}));
    getStops(route, value);
    navigate('/nextrip');
  }

  /*const handleStops = (e, { value }) => {
    console.log(value);
    dispatch(emptyTrips());
    dispatch(setSelectedStop(value));
    getTrips(route, direction, value);
    navigate('/nextrip');
  }*/

  // fetches direction data based off of route passed in, call to backend, sets direction list
  const getDirections = (route) => {
    fetch('/directions/' + route)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log('Directions for ' + route + ': ' + data);
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

  // fetches stop data based off of route and direction passed in, call to backend, sets redux stops list
  const getStops = (route, direction) => {
    fetch('/stops/' + route + '/' + direction)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log('Stops: ' + data);
        dispatch(setStops(data.map((data) => {
          return {
            key: data.Value,
            value: data.Value,
            text: data.Text
          }
        })));
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
  }

  /*const getTrips = (route, direction, stop) => {
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
  }*/

  return (
    <>
      <div className='Dropdown-container'>
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
      </div>
    </>
  )
}

export default Routes;