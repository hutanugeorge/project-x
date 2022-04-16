interface SideMenuProps {
   title: string
   children: JSX.Element
}

export default ({ children, title }: SideMenuProps) => {
   return (
      <div className="side-menu">
         <h2 className="side-menu__title">{title}</h2>
         <div className="side-menu__content">{children}</div>
      </div>
   )
}
