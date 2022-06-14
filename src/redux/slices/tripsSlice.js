import { createSlice } from "@reduxjs/toolkit";
import { Table } from 'semantic-ui-react';

export const tripsSlice = createSlice({
  name: 'trips',
  initialState: [],
  reducers: {
    setTrips(state, action) {
      //state = [];
      console.log(action.payload);
      /*action.payload.map((item) => {
        console.log(item)
        state.push(item)
      })*/

      action.payload.map((item) => {
        state.push(
          <Table.Row key={item.DepartureTime}>
            <Table.Cell>{item.Route}</Table.Cell>
            <Table.Cell>{item.Description}</Table.Cell>
            <Table.Cell>{item.DepartureText}</Table.Cell>
          </Table.Row>
        )
      });
    },
    emptyTrips: state => {
      console.log(state.length)
      while(state.length > 0) {
        state.pop();
      }
    }
  }
})

export const { setTrips, emptyTrips } = tripsSlice.actions

export default tripsSlice.reducer