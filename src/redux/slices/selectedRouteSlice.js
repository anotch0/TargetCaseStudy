import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const selectedRouteSlice = createSlice({
  name: 'route',
  initialState: {
    value: null
  },
  reducers: {
    setSelectedRoute(state, action) {
      console.log(action.payload);
      state.value = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedRoute } = selectedRouteSlice.actions

export default selectedRouteSlice.reducer