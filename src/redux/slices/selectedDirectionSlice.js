import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const selectedDirectionSlice = createSlice({
  name: 'direction',
  initialState: {
    value: null
  },
  reducers: {
    setSelectedDirection(state, action) {
      console.log(action.payload);
      state.value = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSelectedDirection } = selectedDirectionSlice.actions

export default selectedDirectionSlice.reducer