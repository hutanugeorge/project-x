import { createSlice } from '@reduxjs/toolkit'

export const apiURLSlice = createSlice({
   name: 'apiURL',
   initialState: {
      url: 'https://project-x-server.vercel.app'
   },
   reducers: {
      goDevelop: (state) => {
         state.url = 'http://localhost:3001'
      },
   },
})

export const { goDevelop } = apiURLSlice.actions
export default apiURLSlice.reducer
