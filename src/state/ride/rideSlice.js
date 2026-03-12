import { act } from "react";
import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/index";
import { useSelector, useDispatch } from "../../../node_modules/react-redux/dist/react-redux";
import { isLoggedIn } from "state/user/userSlice";

//we first export the slice first 
export const rideSlice = createSlice({
    name: "ride",
    initialState: {
        allRides: [],
        rideRequests: [],

    },
    // payload{
    //     form:
    //     to:
    //     requested_by:
    //     time:
    //     limit:
    //     current:

    // }
    reducers: {
        requestRide: (state, action) => {
            state.rideRequests.push(action.payload)
        },

        postRide: (state, action) => {
            state.allRides.push(action.payload)
        },

        // payload{

        //  }

        bookRide: (state, action) => {
            const requestedRide = state.allRides.find((ride) => {
                ride.id == action.payload
            })

            if (requestRide.limit <= requestRide.current + 1) {
                //book it

            }

            else {
                console.log("ride booking not successfull")
            }

        }



    }




})

export const { requestRide, postRide, bookRide } = rideSlice.actions
export default rideSlice.reducer