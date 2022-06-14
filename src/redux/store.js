import { configureStore } from '@reduxjs/toolkit';

import selectedRouteReducer from './slices/selectedRouteSlice.js';
import selectedDirectionReducer from './slices/selectedDirectionSlice.js';
import selectedStopReducer from './slices/selectedStopSlice.js';
import tripsReducer from './slices/tripsSlice';

export default configureStore({
  reducer: {
    route: selectedRouteReducer,
    direction: selectedDirectionReducer,
    stop: selectedStopReducer,
    trips: tripsReducer
  }
})