import { configureStore } from '@reduxjs/toolkit';

// imports the reducers from each slice created
import selectedRouteReducer from './slices/selectedRouteSlice.js';
import selectedDirectionReducer from './slices/selectedDirectionSlice.js';
import selectedStopReducer from './slices/selectedStopSlice.js';
import stopsReducer from './slices/stopsSlice'
import tripsReducer from './slices/tripsSlice';

// configures store for redux
export default configureStore({
  reducer: {
    direction: selectedDirectionReducer,
    route: selectedRouteReducer,
    stop: selectedStopReducer,
    stops: stopsReducer,
    trips: tripsReducer
  }
})