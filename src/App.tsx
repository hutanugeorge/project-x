import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import NavBar from './components/NavBar'

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'


export default () => {
   const token = localStorage.getItem('token')
   return (
      <>
         {window.location.pathname !== '/' && token && <NavBar />}
         <Router>
            <Routes>
               <Route element={<AuthForm />} path={'/'} />
               <Route element={<HomePage />} path={'/homepage'} />
               <Route element={<PostPage/>} path={'/post/:postID'} />
            </Routes>
         </Router>
      </>
   )
}
