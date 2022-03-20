import axios from 'axios'
import isJwtTokenExpired from 'jwt-check-expiry'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../redux/store'
import { loginUser } from '../../redux/user'
import Button from '../Button'
import {
   DesktopButtonHeight,
   DesktopButtonWidth, MobileButtonHeight,
   MobileButtonWidth,
   TabletButtonHeight,
   TabletButtonWidth
} from '../Button/interface'

import {
   DesktopInputHeight, DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight, TabletInputWidth
} from '../Input/interface'
import InputLabeled from '../InputLabeled'


enum AuthView {
   LOGIN = 'LOGIN',
   SIGNUP = 'SIGNUP'
}

export default () => {
   const { isAuthenticated } = useSelector((state: RootState) => state.user)

   const [ authView, setAuthView ] = useState(AuthView.LOGIN)

   const [ firstName, setFirstName ] = useState<string | undefined>()
   const [ lastName, setLastName ] = useState<string | undefined>()
   const [ email, setEmail ] = useState<string | undefined>()
   const [ password, setPassword ] = useState<string | undefined>()
   const [ confirmPassword, setConfirmPassword ] = useState<string | undefined>()

   const [ firstNameError, setFirstNameError ] = useState<string | undefined>()
   const [ lastNameError, setLastNameError ] = useState<string | undefined>()
   const [ emailError, setEmailError ] = useState<string | undefined>()
   const [ passwordError, setPasswordError ] = useState<string | undefined>()
   const [ confirmPasswordError, setConfirmPasswordError ] = useState<string | undefined>()

   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      const token = localStorage.getItem('token')
      token && !isJwtTokenExpired(token!) && navigate('/homepage')
   }, [ isAuthenticated ])

   if (!isAuthenticated)
      return <div className="auth__wrapper">
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
            <form className="auth__form" onSubmit={async (e) => {
               e.preventDefault()
               if (authView === AuthView.LOGIN) {
                  try {
                     const response = await axios.post('http://localhost:3001/login', {
                        email: email,
                        password: password
                     })
                     if (response.status === 200) {
                        dispatch(loginUser({
                           user: response.data.user,
                           token: response.data.token
                        }))
                        navigate('/homepage')
                     }
                  } catch (error: any) {
                     if (error.response.status === 403) {
                        setPasswordError(error.response.data.errors.password)
                        setEmailError(error.response.data.errors.email)
                     }
                  }
               } else if (authView === AuthView.SIGNUP) {
                  try {
                     const response = await axios.post('http://localhost:3001/signup', {
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword,
                        firstName: firstName,
                        lastName: lastName
                     })
                     response.status === 200 && dispatch(loginUser({
                        user: response.data.user,
                        token: response.data.token
                     }))
                  } catch (error: any) {
                     if (error.response.status === 403) {
                        setFirstNameError(error.response.data.errors.firstName)
                        setLastNameError(error.response.data.errors.lastName)
                        setEmailError(error.response.data.errors.email)
                        setConfirmPasswordError(error.response.data.errors.confirmPassword)
                        setPasswordError(error.response.data.errors.password)
                     }
                  }
               }
            }}>
               <div className="auth__form__content">
                  <div className="auth__form__content__title">
                     <h2 data-testid="test-title"
                         className="auth__form__content__title__content">
                        {authView === AuthView.LOGIN && 'Login' || authView === AuthView.SIGNUP && 'Signup'}
                     </h2>
                  </div>
                  {authView === AuthView.SIGNUP &&
                  <>
                      <InputLabeled name={'firstName'} type={'text'} placeholder={'First Name'}
                                    onChange={[ setFirstName ]} error={firstNameError}
                                    value={firstName ?? ''}
                                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                    color={InputColor.PRIMARY}
                                    labelText={firstNameError ?? 'First name'}/>

                      <InputLabeled name={'lastName'} type={'text'} placeholder={'Last Name'}
                                    onChange={[ setLastName ]} error={lastNameError}
                                    value={lastName ?? ''}
                                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                    color={InputColor.PRIMARY}
                                    labelText={lastNameError ?? 'Last name'}/>
                  </>}
                  <InputLabeled name={'email'} type={'email'} placeholder={'Email'}
                                onChange={[ setEmail ]} error={emailError}
                                value={email ?? ''}
                                width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                color={InputColor.PRIMARY} labelText={emailError ?? 'Email'}/>
                  <InputLabeled type="password" name="password" placeholder="Password"
                                onChange={[ setPassword ]} value={password ?? ''}
                                labelText={passwordError ?? 'Password'} error={passwordError}
                                width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                color={InputColor.PRIMARY}/>
                  {authView === AuthView.SIGNUP &&
                  <div data-testid="confirm-password">
                      <InputLabeled name="confirmPassword" type="password"
                                    placeholder="Repeat password" error={confirmPasswordError}
                                    onChange={[ setConfirmPassword ]}
                                    value={confirmPassword ?? ''}
                                    labelText={confirmPasswordError ?? 'Repeat password'}
                                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                    color={InputColor.PRIMARY}/>
                  </div>
                  }
                  <div className="auth__form__content__signup-link" data-testid="form-link">
                     {authView === AuthView.LOGIN &&
                     <p className="auth__form__content__signup-link__content">You doesn't have an
                         account? <span data-testid="signup-trigger"
                                        onClick={() => {
                                           setEmail(undefined)
                                           setPassword(undefined)
                                           setAuthView(AuthView.SIGNUP)
                                        }}><u>Sign up!</u></span>
                     </p>}
                     {authView === AuthView.SIGNUP &&
                     <p className="auth__form__content__signup-link__content">Have an
                         account? <span data-testid="login-trigger"
                                        onClick={() => {
                                           setFirstName(undefined)
                                           setLastName(undefined)
                                           setEmail(undefined)
                                           setPassword(undefined)
                                           setConfirmPassword(undefined)
                                           setAuthView(AuthView.LOGIN)
                                        }}><u>Login!</u></span>
                     </p>}
                  </div>
                  <div data-testid="form-button">
                     <Button type={'submit'}
                             text={authView === AuthView.LOGIN ? 'Login' : 'Signup'}
                             width={[ DesktopButtonWidth.M, TabletButtonWidth.M, MobileButtonWidth.M ]}
                             height={[ DesktopButtonHeight.L, TabletButtonHeight.M, MobileButtonHeight.M ]}/>
                  </div>
               </div>
            </form>
         </div>
      </div>
   else
      return <></>
}


