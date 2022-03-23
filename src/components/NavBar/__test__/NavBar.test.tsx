import ReactDOM from 'react-dom'
import { Simulate } from 'react-dom/test-utils'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import NavBar from '../NavBar'
import store from '../../../redux/store'


describe('NavBar testing', () => {
   it('renders without crashes', () => {
      const div = document.createElement('div')
      ReactDOM.render(
         <Provider store={store}>
            <BrowserRouter>
               <NavBar />
            </BrowserRouter>
         </Provider>,
         div,
      )
   })
   it('redirects the user when logout button is clicked', () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <NavBar />
            </BrowserRouter>
         </Provider>,
      )
      fireEvent.click(screen.getByTestId('logout-trigger'))
      expect(window.location.pathname).toEqual('/')
   })
   it('title renders correctly', () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <NavBar />
            </BrowserRouter>
         </Provider>,
      )
      const title = screen.getByTestId('title')
      expect(title.innerHTML).toEqual('ProjectX')
   })
})
