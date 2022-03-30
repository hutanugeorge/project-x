import { configureStore } from '@reduxjs/toolkit'
import modals from './homepageModals'
import url from './apiURL'
import user from './user'

const store = configureStore({
   reducer: {
      user,
      modals,
      url
   },
})

export type RootState = ReturnType<typeof store.getState>
export default store
