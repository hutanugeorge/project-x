import React from 'react'

import DesktopNavBar from '../DesktopNavBar'
import MobileNavBar from '../MobileComponents/MobileNavBar'

export default () => {
   return (
      <div className="nav-bar">
         <DesktopNavBar />
         <MobileNavBar />
      </div>
   )
}
