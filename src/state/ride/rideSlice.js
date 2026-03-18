import { createSlice } from "@reduxjs/toolkit"
import { RidesData, BookingData, RequestsData } from "Data/dummyData"

export const rideSlice = createSlice({
    name: "ride",
    initialState: {
        allRides: RidesData,
        allBookings: BookingData,
        allRequests: RequestsData,
    },
    reducers: {
        postRide: (state, action) => {
            state.allRides.push(action.payload)
        },
        bookRide: (state, action) => {
            const { userId, rideId } = action.payload
            const ride = state.allRides.find(r => r.rideid === rideId)
            if (!ride) return
            const alreadyBooked = state.allBookings.some(
                b => b.rideid === rideId && b.passengerid === userId
            )
            if (alreadyBooked) return
            if (ride.seats > 0) {
                state.allBookings.push({
                    bookingid: Date.now(),
                    rideid: rideId,
                    passengerid: userId,
                })
                ride.seats -= 1
            }
        },
        postRequest: (state, action) => {
            state.allRequests.push(action.payload)
        }
    }
})

export const { postRide, bookRide, postRequest } = rideSlice.actions
export default rideSlice.reducer