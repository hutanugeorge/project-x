export default (auth?: boolean) => {
   const token = localStorage.getItem('token')
   const authHeader = { 'Authorization': `Bearer ${token}` }
   const headers = {
      'Content-type': 'application/json'
   }
   return auth ? Object.assign({ ...headers, ...authHeader }) : headers
}