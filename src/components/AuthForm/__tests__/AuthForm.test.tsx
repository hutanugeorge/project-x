import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import AuthForm from '../AuthForm'
import store from '../../../redux/store'


describe('AuthForm testing', () => {
   it('render AuthForm', () => {
      const div = document.createElement('div')
      ReactDom.render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>, div)
   })

   it('have default login view', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const title = screen.getByTestId('test-title')
      expect(title.innerHTML).toContain('Login')
   })

   it('title should be "Signup" after click on signup link', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const title = screen.getByTestId('test-title')
      fireEvent.click(screen.getByTestId('signup-trigger'))
      expect(title.innerHTML).toContain('Signup')
   })

   it('title should be "Login" after click on login link', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const title = screen.getByTestId('test-title')
      fireEvent.click(screen.getByTestId('signup-trigger'))
      fireEvent.click(screen.getByTestId('login-trigger'))
      expect(title.innerHTML).toContain('Login')
   })

   it('by default "Repeat password" shouldn\'t exist', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const authForm = screen.getByTestId('auth')
      expect(authForm.contains(document.querySelector('div.repeatPassword'))).toBe(false)
   })

   it('after click on "Signup link", "Repeat password" should exist', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      fireEvent.click(screen.getByTestId('signup-trigger'))
      const repeatPassword = screen.getByTestId('repeat-password')
      expect(repeatPassword).toBeTruthy()
   })

   it('by default the button should have "Login" text', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const formButton = screen.getByTestId('form-button')
      expect(formButton.innerHTML).toContain('Login')
   })

   it('after click on "Signup Link" the button should have "Signup" text', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const formButton = screen.getByTestId('form-button')
      fireEvent.click(screen.getByTestId('signup-trigger'))
      expect(formButton.innerHTML).toContain('Signup')
   })

   it('by default form link should be "Signup"', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const formLink = screen.getByTestId('form-link')
      expect(formLink.innerHTML).toBe('' +
         '<p class="auth__form__content__signup-link__content">' +
         'Doesn\'t have an account? ' +
         '<span data-testid="signup-trigger">' +
         '<u>Sign up!</u>' +
         '</span>' +
         '</p>'
      )
   })

   it('after click on "Signup Link" the form link should be "Login!"', () => {
      render(<Provider store={store}><BrowserRouter><AuthForm/></BrowserRouter></Provider>)
      const formLink = screen.getByTestId('form-link')
      fireEvent.click(screen.getByTestId('signup-trigger'))
      expect(formLink.innerHTML).toBe('' +
         '<p class="auth__form__content__signup-link__content">' +
         'Have an account? ' +
         '<span data-testid="login-trigger">' +
         '<u>Login!</u>' +
         '</span>' +
         '</p>'
      )
   })
})
