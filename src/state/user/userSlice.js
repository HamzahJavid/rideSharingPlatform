import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../../Data/dummyData";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        registeredUsers: UsersData,
        loggedIn: false
    },
    reducers: {
        registerUser: (state, action) => {
            try {
                const existingUser = state.registeredUsers.find(
                    user => user.username === action.payload.username
                );
                if (existingUser) {
                    throw new Error("This username already exists");
                }
                state.registeredUsers = [...state.registeredUsers, action.payload];
                state.loggedIn = true
            } catch (e) {
                alert(e.message);
            }
        },

        logIn: (state, action) => {
            try {
                const currUser = state.registeredUsers.find(user =>
                    user.username === action.payload.username &&
                    user.password === action.payload.password
                );
                if (currUser) {
                    state.loggedIn = true
                    localStorage.setItem("id", currUser.id)
                    localStorage.setItem("name", currUser.username)
                } else {
                    throw new Error("These credentials are not valid");
                }
            } catch (e) {
                alert(e.message);
            }
        },

        logOut: (state) => {
            state.loggedIn = false
        },

        changePassword: (state, action) => {
            try {
                const { userid, currentPassword, newPassword } = action.payload;
                const userIndex = state.registeredUsers.findIndex(user => user.userid === userid);
                if (userIndex === -1) {
                    throw new Error("User not found");
                }
                if (state.registeredUsers[userIndex].password !== currentPassword) {
                    throw new Error("Current password is incorrect");
                }
                state.registeredUsers[userIndex].password = newPassword;
                alert("Password changed successfully");
            } catch (e) {
                alert(e.message);
            }
        },


    }
});

export const { registerUser, logIn, logOut, changePassword } = userSlice.actions;
export default userSlice.reducer;