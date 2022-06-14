import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// used to get specific direction from list
export const selectedDirectionSlice = createSlice({
  name: 'direction',
  initialState: {
    value: null,
    text: null
  },
  reducers: {
    setSelectedDirection(state, action) {
      console.log('Selected direction: ' + action.payload);
      state.value = action.payload.value;
      state.text = action.payload.text;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedDirection } = selectedDirectionSlice.actions

export default selectedDirectionSlice.reducer