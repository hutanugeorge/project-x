import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import HomePage from '../HomePage'
import store from '../../../redux/store'

describe('HomePage testing', () => {
   it('renders without crashes', () => {
      const div = document.createElement('div')
      ReactDOM.render(
         <Provider store={store}>
            {' '}
            <HomePage />
         </Provider>,
         div,
      )
   })
})
