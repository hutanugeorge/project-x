import jwt_decode from 'jwt-decode'


export default () => {
   const token = localStorage.getItem('token')
   const decodedToken: any = token && jwt_decode(token)
   return decodedToken.userID
}