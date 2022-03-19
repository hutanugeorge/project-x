import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
   name: 'user',
   initialState: {
      isAuthenticated: false,
      user: {}
   },
   reducers: {
      loginUser: (state, { payload }) => {
         const { user, token } = payload
         state.user = { ...user }
         localStorage.setItem('token', token)
         state.isAuthenticated = true
      },
      logoutUser: (state) => {
         localStorage.removeItem('token')
         state.isAuthenticated = false
      },
      updateUserState: (state, { payload }) => {
         const { user } = payload
         state.user = { ...state.user, ...user }
      }
   }
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
