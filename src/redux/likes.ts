import { createSlice } from '@reduxjs/toolkit'


export const likesSlice = createSlice({
   name: 'likes',
   initialState: {
      likes: [ 'ides' ],
      unlikes: [ 'ides' ]
   },
   reducers: {
      addLike: (state, action) => {
         const { payload } = action
         if (state.unlikes.includes(payload))
            state.unlikes = state.unlikes.filter(like => like !== payload)
         !state.likes.includes(payload) && state.likes.push(payload)
      },
      removeLike: (state, action) => {
         const { payload } = action
         if (state.likes.includes(payload))
            state.likes = state.likes.filter(like => like !== payload)
         !state.unlikes.includes(payload) && state.unlikes.push(payload)
      }
   }
})

export const { addLike, removeLike } = likesSlice.actions
export default likesSlice.reducer