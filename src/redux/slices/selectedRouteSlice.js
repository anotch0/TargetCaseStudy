import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// used to get a specific route from list
export const selectedRouteSlice = createSlice({
  name: 'route',
  initialState: {
    value: null,
    text: null
  },
  reducers: {
    setSelectedRoute(state, action) {
      console.log('Selected route: ' + action.payload);
      state.value = action.payload.value;
      state.text = action.payload.text;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedRoute } = selectedRouteSlice.actions

export default selectedRouteSlice.reducer