import { configureStore } from '@reduxjs/toolkit'

import user from './user'
import loginModal from './loginModal'


const store = configureStore({
   reducer: {
      user,
      loginModal
   }
})

export type RootState = ReturnType<typeof store.getState>
export default store

