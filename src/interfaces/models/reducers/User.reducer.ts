import { createSlice } from "@reduxjs/toolkit"

const EmptyUser = undefined

export const userReducer = createSlice({
    name: "user",
    initialState: {value: EmptyUser},
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
            console.log(state.value)
        },
        unsetUser: (state) => {
            state.value = EmptyUser
            console.log(state.value)
        }
    }
})

export const {setUser, unsetUser} = userReducer.actions

export default userReducer.reducer