import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { fireEvent, render, screen } from '@testing-library/react'

import NavBar from '../NavBar'
import store from '../../../redux/store'


describe('NavBar testing', () => {
   it('renders without crashes', () => {
      const div = document.createElement('div')
      ReactDOM.render(
         <Provider store={store}>
            <NavBar />
         </Provider>,
         div,
      )
   })
   it('redirects the user when logout button is clicked', () => {
      render(
         <Provider store={store}>
            <NavBar />
         </Provider>,
      )
      fireEvent.click(screen.getByTestId('logout-trigger'))
      expect(window.location.pathname).toEqual('/')
   })
   it('title renders correctly', () => {
      render(
         <Provider store={store}>
            <NavBar />
         </Provider>,
      )
      const title = screen.getByTestId('title')
      expect(title.innerHTML).toEqual('ProjectX')
   })
   it('mobile navbar buttons activates correctly', () => {
      render(
         <Provider store={store}>
            <NavBar />
         </Provider>,
      )
      const profile = screen.getByTestId('profile')
      fireEvent.click(screen.getByTestId('profile'))
      expect(profile.className).toContain('__active')

      const activity = screen.getByTestId('activity')
      fireEvent.click(screen.getByTestId('activity'))
      expect(activity.className).toContain('__active')

      const homepage = screen.getByTestId('homepage')
      fireEvent.click(screen.getByTestId('homepage'))
      expect(homepage.className).toContain('__active')

      const explore = screen.getByTestId('explore')
      fireEvent.click(screen.getByTestId('explore'))
      expect(explore.className).toContain('__active')

      const settings = screen.getByTestId('settings')
      fireEvent.click(screen.getByTestId('settings'))
      expect(settings.className).toContain('__active')

   })
})
