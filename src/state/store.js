import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import rideReducer from "./ride/rideSlice"
export default configureStore({
    reducer: {
        users: userReducer,
        ride: rideReducer
    }
});