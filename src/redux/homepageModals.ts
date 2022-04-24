import { createSlice } from '@reduxjs/toolkit'


export const homepageModalsSlice = createSlice({
   name: 'homepageModals',
   initialState: {
      showNotifications: false,
      showExplore: false,
      showSettings: false,
      showUserPage: false,
   },
   reducers: {
      toggleNotifications: (state) => {
         state.showNotifications = !state.showNotifications
         state.showExplore = false
         state.showSettings = false
         state.showUserPage = false
      },
      toggleUserPage: (state) => {
         state.showUserPage = !state.showUserPage
         state.showExplore = false
         state.showSettings = false
         state.showNotifications = false
      },
      toggleExplore: (state) => {
         state.showExplore = !state.showExplore
         state.showNotifications = false
         state.showSettings = false
         state.showUserPage = false
      },
      toggleSettings: (state) => {
         state.showSettings = !state.showSettings
         state.showExplore = false
         state.showNotifications = false
         state.showUserPage = false
      },
      setModalsOff: (state) => {
         state.showNotifications = false
         state.showExplore = false
         state.showSettings = false
         state.showUserPage = false
      },
   },
})

export const { toggleExplore, toggleNotifications, toggleSettings, toggleUserPage, setModalsOff } =
   homepageModalsSlice.actions
export default homepageModalsSlice.reducer
