export interface ButtonProps {
   type: 'button' | 'submit' | 'reset' | undefined
   onClickFunctions?: (() => void)[]
   width: [DesktopButtonWidth, TabletButtonWidth, MobileButtonWidth]
   height: [DesktopButtonHeight, TabletButtonHeight, MobileButtonHeight]
   text?: string
   color?: ButtonColor
   preventDefault?: boolean
   children?: JSX.Element
   reactive?: Boolean
   id?: string
}

export enum DesktopButtonWidth {
   FIT = 'button-desktop-width-fit-content',
   S = 'button-desktop-width-small',
   M = 'button-desktop-width-medium',
   L = 'button-desktop-width-large',
   XL = 'button-desktop-width-extra-large',
}

export enum TabletButtonWidth {
   FIT = 'button-tablet-width-fit-content',
   S = 'button-tablet-width-small',
   M = 'button-tablet-width-medium',
   L = 'button-tablet-width-large',
   XL = 'button-tablet-width-extra-large',
}

export enum MobileButtonWidth {
   FIT = 'button-mobile-width-fit-content',
   S = 'button-mobile-width-small',
   M = 'button-mobile-width-medium',
   L = 'button-mobile-width-large',
   XL = 'button-mobile-width-extra-large',
}

export enum DesktopButtonHeight {
   FIT = 'button-desktop-height-fit-content',
   S = 'button-desktop-height-small',
   M = 'button-desktop-height-medium',
   L = 'button-desktop-height-large',
   XL = 'button-desktop-height-extra-large',
}

export enum TabletButtonHeight {
   FIT = 'button-tablet-height-fit-content',
   S = 'button-tablet-height-small',
   M = 'button-tablet-height-medium',
   L = 'button-tablet-height-large',
   XL = 'button-tablet-height-extra-large',
}

export enum MobileButtonHeight {
   FIT = 'button-mobile-height-fit-content',
   S = 'button-mobile-height-small',
   M = 'button-mobile-height-medium',
   L = 'button-mobile-height-large',
   XL = 'button-mobile-height-extra-large',
}

export enum ButtonColor {
   PRIMARY = 'button-color-primary',
   SECONDARY = 'button-color-secondary',
   POSITIVE = 'button-color-positive',
   TRANSPARENT = 'button-color-transparent',
}
