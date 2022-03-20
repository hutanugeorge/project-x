import ReactDOM from 'react-dom'

import { render, fireEvent, screen } from '@testing-library/react'

import Input from '../Input'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor,
   MobileInputHeight,
   MobileInputWidth,
   TabletInputHeight,
   TabletInputWidth
} from '../interface'


describe('Input component testing', () => {
   test('render input', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Input name={'lastName'} type={'text'} placeholder={'Last Name'}
                             onChange={[ () => {
                             } ]} error={'lastNameError'}
                             value={'lastName' ?? ''}
                             width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                             height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                             color={InputColor.PRIMARY}/>, div)
   })
   test('check for Input props', () => {
      render(<Input name={'lastName'} type={'text'} placeholder={'Last Name'}
                    onChange={[ () => {} ]} error={'lastNameError'}
                    value={'lastName' ?? ''}
                    width={[ DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M ]}
                    height={[ DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                    color={InputColor.PRIMARY} />)
      const input = screen.getByTestId('input')
      expect(input.getAttribute('name')).toBe('lastName')
      expect(input.getAttribute('type')).toBe('text')
      expect(input.getAttribute('placeholder')).toBe('Last Name')
      expect(input.className).toContain('input__error')
      expect(input.getAttribute('value')).toBe('lastName')
      expect(input.className).toContain(['input-desktop-width-small', 'input-tablet-width-small', 'input-mobile-width-medium'].join(' '))
      expect(input.className).toContain(['input-desktop-height-medium', 'input-tablet-height-medium', 'input-mobile-height-large'].join(' '))
      expect(input.className).toContain('input-primary-color')
   })
})