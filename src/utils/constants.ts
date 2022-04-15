import { Post } from '../shared/interfaces/post'


export enum ActivityActions {
   FOLLOW = 'FOLLOW',
   LIKE = 'LIKE',
}

export const DEFAULT_POST: Post = {
   _id: '', user: { firstName: '', lastName: '', profilePhoto: '', _id: '' },
   liked: false, noComments: 0, noLikes: 0, noSaves: 0,
   date: 'a second ago', description: '', photo: ''

}
