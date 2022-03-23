import ReactDOM from 'react-dom'
import {
   DesktopInputHeight,
   DesktopInputWidth,
   InputColor, MobileInputHeight,
   MobileInputWidth, TabletInputHeight,
   TabletInputWidth,
} from '../../Input/interface'

import InputLabeled from '../InputLabeled'


test('render input labeled', () => {
   const div = document.createElement('div')
   ReactDOM.render(<InputLabeled labelText={'labelText'} name={'name'} type={'text'} placeholder={'name'} onChange={[() => {}]}
                                 width={[  DesktopInputWidth.S, TabletInputWidth.S, MobileInputWidth.M  ]}
                                 height={[  DesktopInputHeight.M, TabletInputHeight.M, MobileInputHeight.L ]}
                                 color={InputColor.PRIMARY}
                                 value={''} error={undefined} />, div)
})