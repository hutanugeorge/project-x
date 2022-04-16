import { createSlice } from '@reduxjs/toolkit'

export const homepageModalsSlice = createSlice({
   name: 'homepageModals',
   initialState: {
      showNotifications: false,
      showExplore: false,
      showSettings: false,
   },
   reducers: {
      toggleNotifications: (state) => {
         state.showNotifications = !state.showNotifications
         state.showExplore = false
         state.showSettings = false
      },
      toggleExplore: (state) => {
         state.showExplore = !state.showExplore
         state.showNotifications = false
         state.showSettings = false
      },
      toggleSettings: (state) => {
         state.showSettings = !state.showSettings
         state.showExplore = false
         state.showNotifications = false
      },
      setModalsOff: (state) => {
         state.showNotifications = false
         state.showExplore = false
         state.showSettings = false
      },
   },
})

export const { toggleExplore, toggleNotifications, toggleSettings, setModalsOff } =
   homepageModalsSlice.actions
export default homepageModalsSlice.reducer
