import { configureStore } from '@reduxjs/toolkit'
import modals from './homepageModals'
import url from './apiURL'
import user from './user'
import visitorUser from './visitorUser'

const store = configureStore({
   reducer: {
      user,
      modals,
      url,
      visitorUser,
   },
})

export type RootState = ReturnType<typeof store.getState>
export default store
