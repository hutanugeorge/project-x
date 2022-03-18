import axios from 'axios'


interface LoginUserData {
   email: string
   password: string
}

interface SignupUserData {
   firstName: string
   lastName: string
   email: string
   password: string
   confirmPassword: string
}

export const signinUser = async (data: LoginUserData) => {
   const response = await axios.post('http://localhost:3001/login', data)
   if (response.status <= 200 && response.status <= 300) {
      return response
   }
   return null
}

export const signupUser = async (data: SignupUserData) => {
   const response = await axios.post('http://localhost:3001/signup', data)
   if (response.status <= 200 && response.status <= 300)
      return response
   return null
}