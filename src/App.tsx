import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import NavBar from './components/NavBar'

import HomePage from './pages/HomePage'

export default () => {
   return (
      <>
         <NavBar />
         <Router>
            <Routes>
               <Route element={<AuthForm />} path={'/'} />
               <Route element={<HomePage />} path={'/homepage'} />
            </Routes>
         </Router>
      </>
   )
}
