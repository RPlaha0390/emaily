import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type authInitialState = { user: null | boolean; userLoading: boolean };
const initialState: authInitialState = { user: null, userLoading: true };

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async () => await fetch('/api/current_user').then((data) => data.json()),
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userLoading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = false;
        state.userLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
