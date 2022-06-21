import { createSlice } from "@reduxjs/toolkit"

const EmptyUser = undefined

export const userReducer = createSlice({
    name: "user",
    initialState: {value: EmptyUser},
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        unsetUser: (state) => {
            state.value = EmptyUser
        }
    }
})

export const {setUser, unsetUser} = userReducer.actions

export default userReducer.reducer