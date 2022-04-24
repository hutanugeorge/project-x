import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import { LikeUser } from '../../shared/interfaces/post'


export const getLikedUsers = (globalUserID: string, likedUsers: LikeUser[] | undefined, postID: string) => {

   const navigate = useNavigate()

   const { likes, unlikes } = useSelector((state: RootState) => state.likes)

   return (
      <div className="post__people-reactions__people">
         {
            likedUsers && likedUsers.length === 0 &&
            <p className="post__people-reactions__people__person">
                <span>
                    {likes.includes(postID) ? 'You' : ''}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 1 && globalUserID === likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                    {unlikes.includes(postID) ? '' : 'You'}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 2 && globalUserID === likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
               {!unlikes.includes(postID) &&
               <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                    You&nbsp;and&nbsp;
                </span>}
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length > 2 && globalUserID === likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
               {!unlikes.includes(postID) &&
               <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                  You,&nbsp;
                  </span>}
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}&nbsp;
                </span>
                <span>
                    and other {likedUsers.length - 2}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 1 && globalUserID !== likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
               {likes.includes(postID) &&
               <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                  You,&nbsp;
                  </span>}
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                   {likedUsers[0].firstName} {likedUsers[0].lastName}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 2 && globalUserID !== likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
               {likes.includes(postID) &&
               <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                  You,&nbsp;
                  </span>}
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                   {likedUsers[0].firstName} {likedUsers[0].lastName}&nbsp;and&nbsp;
                </span>
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length > 2 && globalUserID !== likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
               {likes.includes(postID) &&
               <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                  You,&nbsp;
                  </span>}
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                   {likedUsers[0].firstName} {likedUsers[0].lastName},&nbsp;
                </span>
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}
                </span>
                &nbsp;
                <span>
                    and other {likedUsers.length - 2}
                </span>
            </p>
         }
      </div>
   )
}
