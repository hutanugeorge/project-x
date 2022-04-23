import { useNavigate } from 'react-router-dom'
import { LikeUser } from '../../shared/interfaces/post'


export const getLikedUsers = (globalUserID: string, likedUsers: LikeUser[] | undefined, postUserID: string) => {

   const navigate = useNavigate()
   return (
      <div className="post__people-reactions__people">
         {
            likedUsers && likedUsers.length === 1 && globalUserID === likedUsers[0]._id &&
            <p className="post__people-reactions__people__person"
               onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                <span>You</span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 2 && globalUserID === likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                    You
                </span>&nbsp;and&nbsp;
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length > 2 && globalUserID === likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                    You
                </span>,&nbsp;
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}
                </span>
                &nbsp;
                <span>
                    and other {likedUsers.length - 2}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 1 && globalUserID !== likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                   {likedUsers[0].firstName} {likedUsers[0].lastName}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length === 2 && globalUserID !== likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                   {likedUsers[0].firstName} {likedUsers[0].lastName}
                </span>&nbsp;and&nbsp;
                <span onClick={() => navigate(`/user/${likedUsers[1]._id}`, { replace: true })}>
                   {likedUsers[1].firstName} {likedUsers[1].lastName}
                </span>
            </p>
         }
         {
            likedUsers && likedUsers.length > 2 && globalUserID !== likedUsers[0]._id &&
            <p className="post__people-reactions__people__person">
                <span onClick={() => navigate(`/user/${likedUsers[0]._id}`, { replace: true })}>
                   {likedUsers[0].firstName} {likedUsers[0].lastName}
                </span>,&nbsp;
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
