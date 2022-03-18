import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import NavBar from '../NavBar'
import store from '../../../redux/store'

it('renders without crashes', () => {
   const div = document.createElement('div')
   ReactDOM.render(<Provider store={store}> <NavBar /></Provider>, div)
})



