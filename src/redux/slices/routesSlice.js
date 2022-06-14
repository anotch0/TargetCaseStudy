import { createSlice } from "@reduxjs/toolkit";

export const routesSlice = createSlice({
  name: 'routes',
  initialState: [],
  reducers: {
    setRoutes(state, action) {
      //state = [];
      console.log(action.payload);
      action.payload.map((item) => {
        console.log(item)
        state.push(item)
      })
    },
    emptyRoutes: state => {
      console.log(state.length)
      while (state.length > 0) {
        state.pop();
      }
    }
  }
})

export const { setRoutes, emptyRoutes } = routesSlice.actions

export default routesSlice.reducer