import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name: 'userName',
  initialState: '',
  reducers: {
    setUserNameGlobal: (state, action) => action.payload // Trae informacion dinamica
  }
})

export const {setUserNameGlobal} = userNameSlice.actions

export default userNameSlice.reducer
