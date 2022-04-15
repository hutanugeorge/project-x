import { createSlice } from '@reduxjs/toolkit'
import { VISITOR_USER_DEFAULT } from './constants'

export const visitorUserSlice = createSlice({
   name: 'visitorUser',
   initialState: {
      visitorUser: VISITOR_USER_DEFAULT,
   },
   reducers: {
      loadVisitorUser: (state, action) => {
         const { payload } = action
         state.visitorUser = { ...payload }
      },
   },
})

export const { loadVisitorUser } = visitorUserSlice.actions
export default visitorUserSlice.reducer
