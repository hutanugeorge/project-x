import React, { useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'
import isJwtTokenExpired from 'jwt-check-expiry'
import ReactLoading from 'react-loading'
import { useDispatch, useSelector } from 'react-redux'

import { goDevelop } from '../../redux/apiURL'
import { RootState } from '../../redux/store'
import { signInUser, signupUser } from '../../services/userServices'
import Button from '../Button'
import {
   ButtonColor,
   DesktopButtonHeight,
   DesktopButtonWidth,
   MobileButtonHeight,
   MobileButtonWidth,
   TabletButtonHeight,
   TabletButtonWidth,
} from '../Button/interface'

import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth,
} from '../Input/interface'
import InputLabeled from '../InputLabeled'

enum AuthView {
   LOGIN = 'LOGIN',
   SIGNUP = 'SIGNUP',
}

export default () => {
   const [authView, setAuthView] = useState(AuthView.LOGIN)

   const [firstName, setFirstName] = useState<string>('')
   const [lastName, setLastName] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [confirmPassword, setConfirmPassword] = useState<string>('')

   const [firstNameError, setFirstNameError] = useState<string | undefined>()
   const [lastNameError, setLastNameError] = useState<string | undefined>()
   const [emailError, setEmailError] = useState<string | undefined>()
   const [passwordError, setPasswordError] = useState<string | undefined>()
   const [confirmPasswordError, setConfirmPasswordError] = useState<string | undefined>()

   const [loginButton, setLoginButton] = useState<any>('Login')
   const [signupButton, setSignupButton] = useState<any>('Signup')

   const token = localStorage.getItem('token')

   const dispatch = useDispatch()

   const { url } = useSelector((state: RootState) => state.url)

   useEffect(() => {
      if (token && !isJwtTokenExpired(token!)) window.location.pathname = '/homepage'

      // dispatch(goDevelop())
   }, [])

   const setInputsErrors = (authView: AuthView, response: AxiosResponse) => {
      switch (authView) {
         case AuthView.LOGIN:
            setEmailError(response.data.errors.email)
            setPasswordError(response.data.errors.password)
            break
         case AuthView.SIGNUP:
            setFirstNameError(response.data.errors.firstName)
            setLastNameError(response.data.errors.lastName)
            setEmailError(response.data.errors.email)
            setPasswordError(response.data.errors.password)
            setConfirmPasswordError(response.data.errors.confirmPassword)
            break
         default:
            break
      }
   }

   const setLoadingButtons = () => {
      setLoginButton(<ReactLoading width={25} height={25} type={'spokes'} color={'#2d31fa'} />)
      setSignupButton(<ReactLoading width={25} height={25} type={'spokes'} color={'#2d31fa'} />)
   }

   return !(token && !isJwtTokenExpired(token!)) ? (
      <div className="auth__wrapper">
         <div data-testid="auth" className="auth">
            <div className="auth__title-container">
               <div className="auth__title-container__title">
                  <h1 className="auth__title-container__title__content">ProjectX</h1>
               </div>
               <div className="auth__title-container__description">
                  <p className="auth__title-container__description__content">
                     Lorem ipsum dolor sit amet, consectet adipisicings elit. Ab aperiam, cum
                     cupiditate dicta dolores, eveniet excepturi laborum minima.
                  </p>
               </div>
            </div>
            <form
               className="auth__form"
               onSubmit={async (e) => {
                  e.preventDefault()
                  if (authView === AuthView.LOGIN) {
                     const [response, error] = await signInUser(
                        {
                           email,
                           password,
                        },
                        `${url}/login`,
                     )
                     if (!error && response?.status === 200) {
                        window.location.pathname = '/homepage'
                        setLoginButton('Login Successfully')
                     }
                     if (error && response?.status === 403) {
                        setInputsErrors(AuthView.LOGIN, response)
                        setLoginButton('Try again')
                     }
                  } else if (authView === AuthView.SIGNUP) {
                     const [response, error] = await signupUser(
                        {
                           firstName,
                           lastName,
                           email,
                           password,
                           confirmPassword,
                        },
                        `${url}/signup`,
                     )
                     if (!error && response?.status === 200) {
                        window.location.pathname = '/homepage'
                        setSignupButton('Signup Successfully')
                     }
                     if (error && response?.status === 403) {
                        setInputsErrors(AuthView.SIGNUP, response)
                        setSignupButton('Try again')
                     }
                  }
               }}
            >
               <div className="auth__form__content">
                  <div className="auth__form__content__title">
                     <h2 data-testid="test-title" className="auth__form__content__title__content">
                        {(authView === AuthView.LOGIN && 'Login') ||
                           (authView === AuthView.SIGNUP && 'Signup')}
                     </h2>
                  </div>
                  {authView === AuthView.SIGNUP && (
                     <>
                        <InputLabeled
                           name={'firstName'}
                           type={'text'}
                           placeholder={'First Name'}
                           onChange={[setFirstName]}
                           error={firstNameError}
                           value={firstName ?? ''}
                           width={[DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.XL]}
                           height={[
                              DesktopInputHeight.M,
                              TabletInputHeight.M,
                              MobileInputHeight.XL,
                           ]}
                           color={InputColor.PRIMARY}
                           labelText={firstNameError ?? 'First name'}
                        />

                        <InputLabeled
                           name={'lastName'}
                           type={'text'}
                           placeholder={'Last Name'}
                           onChange={[setLastName]}
                           error={lastNameError}
                           value={lastName ?? ''}
                           width={[DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.XL]}
                           height={[
                              DesktopInputHeight.M,
                              TabletInputHeight.M,
                              MobileInputHeight.XL,
                           ]}
                           color={InputColor.PRIMARY}
                           labelText={lastNameError ?? 'Last name'}
                        />
                     </>
                  )}
                  <InputLabeled
                     name={'email'}
                     type={'email'}
                     placeholder={'Email'}
                     onChange={[setEmail]}
                     error={emailError}
                     value={email ?? ''}
                     width={[DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.XL]}
                     height={[DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.XL]}
                     color={InputColor.PRIMARY}
                     labelText={emailError ?? 'Email'}
                  />
                  <InputLabeled
                     type="password"
                     name="password"
                     placeholder="Password"
                     onChange={[setPassword]}
                     value={password ?? ''}
                     labelText={passwordError ?? 'Password'}
                     error={passwordError}
                     width={[DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.XL]}
                     height={[DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.XL]}
                     color={InputColor.PRIMARY}
                  />
                  {authView === AuthView.SIGNUP && (
                     <div data-testid="confirm-password">
                        <InputLabeled
                           name="confirmPassword"
                           type="password"
                           placeholder="Repeat password"
                           error={confirmPasswordError}
                           onChange={[setConfirmPassword]}
                           value={confirmPassword ?? ''}
                           labelText={confirmPasswordError ?? 'Repeat password'}
                           width={[DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.XL]}
                           height={[
                              DesktopInputHeight.M,
                              TabletInputHeight.M,
                              MobileInputHeight.XL,
                           ]}
                           color={InputColor.PRIMARY}
                        />
                     </div>
                  )}
                  <div className="auth__form__content__signup-link" data-testid="form-link">
                     {authView === AuthView.LOGIN && (
                        <p className="auth__form__content__signup-link__content">
                           Don't have an account yet?{' '}
                           <span
                              data-testid="signup-trigger"
                              onClick={() => {
                                 setEmail('')
                                 setPassword('')
                                 setAuthView(AuthView.SIGNUP)
                              }}
                           >
                              <u>Sign up!</u>
                           </span>
                        </p>
                     )}
                     {authView === AuthView.SIGNUP && (
                        <p className="auth__form__content__signup-link__content">
                           Have an account?{' '}
                           <span
                              data-testid="login-trigger"
                              onClick={() => {
                                 setFirstName('')
                                 setLastName('')
                                 setEmail('')
                                 setPassword('')
                                 setConfirmPassword('')
                                 setAuthView(AuthView.LOGIN)
                              }}
                           >
                              <u>Login!</u>
                           </span>
                        </p>
                     )}
                  </div>
                  <div data-testid="form-button">
                     <Button
                        color={ButtonColor.POSITIVE}
                        onClickFunctions={[setLoadingButtons]}
                        type={'submit'}
                        reactive={true}
                        text={authView === AuthView.LOGIN ? loginButton : signupButton}
                        width={[DesktopButtonWidth.XL, TabletButtonWidth.XL, MobileButtonWidth.XL]}
                        height={[
                           DesktopButtonHeight.L,
                           TabletButtonHeight.M,
                           MobileButtonHeight.XL,
                        ]}
                     />
                  </div>
               </div>
            </form>
         </div>
      </div>
   ) : (
      <></>
   )
}
