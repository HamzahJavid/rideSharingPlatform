import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/index"
import UsersData from "dummyData/usersData"
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        registeredUsers: UsersData,
        loggedIn: []
    },
    reducers: {
        //registers a new user
        registerUser: (state, action) => {
            try {
                if (state.registeredUsers.find(user => { user.userName == action.payload.userName })) {
                    throw new Error("this user name already exists")
                }
                state.registeredUsers = [...state.registerUser, action.payload]
            }
            catch (e) {
                alert(e.message)
            }

        },

        logIn: (state, action) => {
            try {
                const currUser = state.registeredUsers.find(user => {
                    user.userName == action.payload.userName && user.password == action.payload.password
                })
                if (currUser) {
                    state.loggedIn.push(currUser.id)
                    console.log("User is logged in")
                    return currUser.id
                }
                else {
                    throw new Error("these credentials arenot valid")
                }

            }
            catch (e) {
                alert(e.message)
                return null
            }

        },

        logOut: (state, action) => {
            if (action.payload.id in state.loggedIn) {
                state.loggedIn = state.loggedIn.filter(user => user.id != action.payload.id)
            }
        },

        changePassword: (state, action) => {
            if (action.payload.id in state.loggedIn) {
                state.loggedIn = state.loggedIn.filter(user => user.id != action.payload.id)
            }

        }

    }

})
