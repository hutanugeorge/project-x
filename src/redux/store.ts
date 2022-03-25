import { configureStore } from '@reduxjs/toolkit'
import  modals  from './homepageModals'

import user from './user'

const store = configureStore({
   reducer: {
      user,
      modals,
   },
})

export type RootState = ReturnType<typeof store.getState>
export default store
