import { createSlice } from '@reduxjs/toolkit'
import { USER_DEFAULT } from './constants'

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      user: USER_DEFAULT,
   },
   reducers: {
      loadUser: (state, action) => {
         const { payload } = action
         state.user = { ...payload }
      },
   },
})

export const { loadUser } = userSlice.actions
export default userSlice.reducer
