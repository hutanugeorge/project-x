import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import NavBar from './components/NavBar'

import HomePage from './pages/HomePage'

export default () => {
   const token = localStorage.getItem('token')
   return (
      <>
         {window.location.pathname !== '/' && token && <NavBar />}
         <Router>
            <Routes>
               <Route element={<AuthForm />} path={'/'} />
               <Route element={<p>Is working</p>} path={'/homepage'} />
               {/*<Route element={<HomePage />} path={'/homepage'} />*/}
            </Routes>
         </Router>
      </>
   )
}
