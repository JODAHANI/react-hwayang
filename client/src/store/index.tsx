import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  account: "",
  name: "",
  position: "",
  phone: "",
  token: "",
};

const userReducer = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    auth(state, action) {
      state.name = state.name + 1;
    },
  },
});

const store = configureStore({
  reducer: { user: userReducer.reducer },
});

export const userActions = userReducer.actions;

export default store;
