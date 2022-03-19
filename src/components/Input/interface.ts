import { Dispatch, SetStateAction } from 'react'


export interface InputProps {
   name: string
   type: string
   placeholder: string
   onChange: [ Dispatch<SetStateAction<string | undefined>>, (() => void)[]? ]
   width: [ DesktopInputWidth, TabletInputWidth, MobileInputWidth ]
   height: [ DesktopInputHeight, TabletInputHeight, MobileInputHeight ]
   color: InputColor
   value: string
   error: string | undefined
}

export enum DesktopInputWidth {
   S = 'input-desktop-width-small',
   M = 'input-desktop-width-medium',
   L = 'input-desktop-width-large',
   XL = 'input-desktop-width-extra-large'
}

export enum TabletInputWidth {
   S = 'input-tablet-width-small',
   M = 'input-tablet-width-medium',
   L = 'input-tablet-width-large',
   XL = 'input-tablet-width-extra-large'
}

export enum MobileInputWidth {
   S = 'input-mobile-width-small',
   M = 'input-mobile-width-medium',
   L = 'input-mobile-width-large',
   XL = 'input-mobile-width-extra-large'
}

export enum DesktopInputHeight {
   S = 'input-desktop-height-small',
   M = 'input-desktop-height-medium',
   L = 'input-desktop-height-large',
   XL = 'input-desktop-height-extra-large'
}

export enum TabletInputHeight {
   S = 'input-tablet-height-small',
   M = 'input-tablet-height-medium',
   L = 'input-tablet-height-large',
   XL = 'input-tablet-height-extra-large'
}

export enum MobileInputHeight {
   S = 'input-mobile-height-small',
   M = 'input-mobile-height-medium',
   L = 'input-mobile-height-large',
   XL = 'input-mobile-height-extra-large'
}

export enum InputColor {
   PRIMARY = 'input-primary-color',
   SECONDARY = 'input-secondary-color'
}