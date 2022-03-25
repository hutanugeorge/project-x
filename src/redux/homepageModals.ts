import { createSlice } from '@reduxjs/toolkit'


export const homepageModalsSlice = createSlice({
   name: 'homepageModals',
   initialState: {
      showNotifications: false,
      showExplore: false
   },
   reducers: {
      toggleNotifications: (state) => {
         state.showNotifications = !state.showNotifications
         state.showExplore = false
      },
      toggleExplore: (state) => {
         state.showExplore = !state.showExplore
         state.showNotifications = false
      },
      setModalsOff: (state) => {
         state.showNotifications = false
         state.showExplore = false
      }
   }
})

export const { toggleExplore, toggleNotifications, setModalsOff } = homepageModalsSlice.actions
export default homepageModalsSlice.reducer