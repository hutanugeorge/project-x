import { configureStore } from '@reduxjs/toolkit'
import modals from './homepageModals'
import url from './apiURL'
import user from './user'
import visitorUser from './visitorUser'
import likes from './likes'

const store = configureStore({
   reducer: {
      user,
      modals,
      url,
      visitorUser,
      likes,
   },
})

export type RootState = ReturnType<typeof store.getState>
export default store
