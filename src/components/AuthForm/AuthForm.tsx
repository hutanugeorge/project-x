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
   const [ firstNameInput, setFirstNameInput ] = useState('')
   const [ lastNameInput, setLastNameInput ] = useState('')
   const [ emailInput, setEmailInput ] = useState('')
   const [ passwordInput, setPasswordInput ] = useState('')
   const [ confirmPasswordInput, setConfirmPasswordInput ] = useState('')

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
               console.log('running')
               if (authView === AuthView.LOGIN) {
                  const response = await axios.post('http://localhost:3001/login', {
                     email: emailInput,
                     password: passwordInput
                  })
                  if (response.status === 200) {
                     dispatch(loginUser({
                        user: response.data.user,
                        token: response.data.token
                     }))
                     navigate('/homepage')
                  }
               } else if (authView === AuthView.SIGNUP) {
                  const response = await axios.post('http://localhost:3001/signup', {
                     email: emailInput,
                     password: passwordInput,
                     confirmPassword: confirmPasswordInput,
                     firstName: firstNameInput,
                     lastName: lastNameInput
                  })
                  response.status === 200 && dispatch(loginUser({
                     user: response.data.user,
                     token: response.data.token
                  }))
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
                                    onChange={[ setFirstNameInput ]}
                                    value={firstNameInput}
                                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                    color={InputColor.PRIMARY} labelText={'First name'}/>

                      <InputLabeled name={'lastName'} type={'text'} placeholder={'Last Name'}
                                    onChange={[ setLastNameInput ]}
                                    value={lastNameInput}
                                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                    color={InputColor.PRIMARY} labelText={'Last name'}/>
                  </>}
                  <InputLabeled name={'email'} type={'email'} placeholder={'Email'}
                                onChange={[ setEmailInput ]}
                                value={emailInput}
                                width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                color={InputColor.PRIMARY} labelText={'Email'}/>
                  <InputLabeled type="password" name="password" placeholder="Password"
                                onChange={[ setPasswordInput ]} value={passwordInput}
                                labelText={'Password'}
                                width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                color={InputColor.PRIMARY}/>
                  {authView === AuthView.SIGNUP &&
                  <div data-testid="confirm-password">
                      <InputLabeled name="confirmPassword" type="password"
                                    placeholder="Repeat password"
                                    onChange={[ setConfirmPasswordInput ]}
                                    value={confirmPasswordInput}
                                    labelText={'Repeat password'}
                                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                    color={InputColor.PRIMARY}/>
                  </div>
                  }
                  <div className="auth__form__content__signup-link" data-testid="form-link">
                     {authView === AuthView.LOGIN &&
                     <p className="auth__form__content__signup-link__content">You doesn't have an
                         account? <span data-testid="signup-trigger"
                                        onClick={() => setAuthView(AuthView.SIGNUP)}><u>Sign up!</u></span>
                     </p>}
                     {authView === AuthView.SIGNUP &&
                     <p className="auth__form__content__signup-link__content">Have an
                         account? <span data-testid="login-trigger"
                                        onClick={() => setAuthView(AuthView.LOGIN)}><u>Login!</u></span>
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


