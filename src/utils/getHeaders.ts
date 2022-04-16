interface GetHeadersProps {
   auth?: boolean
   multipartFormData?: boolean
}

export default (options?: GetHeadersProps) => {
   const token = localStorage.getItem('token')
   const authHeader = { Authorization: `Bearer ${token}` }
   const headers = { 'Content-type': 'application/json' }
   if (options) {
      const { auth, multipartFormData } = options
      if (auth && multipartFormData)
         return Object.assign({ ...authHeader, 'Content-Type': 'multipart/form-data' })
      else if (auth && !multipartFormData) return Object.assign({ ...headers, ...authHeader })
   }
   return headers
}
