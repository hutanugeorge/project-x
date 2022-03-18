import { createSlice } from '@reduxjs/toolkit'


export const loginModalSlice = createSlice({
   name: 'loginModal',
   initialState: {
      isActive: false
   },
   reducers: {
      activateModal: (state) => {
         state.isActive = true
      },
      inactivateModal: (state) => {
         state.isActive = false
      }
   }
})

export const { activateModal, inactivateModal } = loginModalSlice.actions
export default loginModalSlice.reducer