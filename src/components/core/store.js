import { configureStore } from "@reduxjs/toolkit";
import { accessTokenReducer } from "./reducer";
// import AccountReducer from "./account-slice";

export default configureStore ({
  reducer: {
    Spotify: accessTokenReducer
  },
  devTools: true
});
