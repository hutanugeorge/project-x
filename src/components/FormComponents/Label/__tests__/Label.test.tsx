import ReactDOM from 'react-dom'

import { render, screen } from '@testing-library/react'
import Label from '../Label'

describe('Label component testing', () => {
   test('render label', () => {
      const div = document.createElement('div')
      ReactDOM.render(
         <Label htmlFor={'labelText'} text={'labelText'} error={'input__error'} />,
         div,
      )
   })
   test('check for Label props', () => {
      render(<Label htmlFor={'labelText'} text={'labelText'} error={undefined} />)
      const label = screen.getByTestId('label')
      expect(label.getAttribute('for')).toBe('labelText')
      expect(label.textContent).toBe('labelText')
      expect(label.className).toBe('label ')
   })
   test('check for Label props with error', () => {
      render(<Label htmlFor={'labelText'} text={'labelText'} error={'Error'} />)
      const label = screen.getByTestId('label')
      expect(label.getAttribute('for')).toBe('labelText')
      expect(label.textContent).toBe('Error')
      expect(label.className).toContain('label__error')
   })
})
