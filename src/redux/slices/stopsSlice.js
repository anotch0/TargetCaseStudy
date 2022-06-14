import { createSlice } from "@reduxjs/toolkit";
import { Table } from 'semantic-ui-react';

// used for list of stops
export const stopsSlice = createSlice({
  name: 'stops',
  initialState: [],
  reducers: {
    setStops(state, action) { // populates stops list
      action.payload.map((item) => {
        state.push(item);
      });
    },
    emptyStops: state => { // empties stops list
      console.log(state.length)
      while (state.length > 0) {
        state.pop();
      }
    }
  }
})

export const { setStops, emptyStops } = stopsSlice.actions

export default stopsSlice.reducer