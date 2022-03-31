import * as React from 'react'
<<<<<<< HEAD
=======
import { Scrollbars } from 'react-custom-scrollbars'
>>>>>>> 61bb196b740fdb0ad3ce04b62b5837ff1ff0f970

interface SideMenuProps {
   title: string
   children: JSX.Element
}

export default ({ children, title }: SideMenuProps) => {
   return (
      <div className="side-menu">
         <h2 className="side-menu__title">{title}</h2>
<<<<<<< HEAD
         <div className="side-menu__content">{children}</div>
=======
         {/*<Scrollbars style={{ height: 650 }}>*/}
         <div className="side-menu__content">{children}</div>
         {/*</Scrollbars>*/}
>>>>>>> 61bb196b740fdb0ad3ce04b62b5837ff1ff0f970
      </div>
   )
}
