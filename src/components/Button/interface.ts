export interface ButtonProps {
   type: 'button' | 'submit' | 'reset' | undefined
   onClickFunctions?: (() => void)[]
   width: [DesktopButtonWidth, TabletButtonWidth, MobileButtonWidth]
   height: [DesktopButtonHeight, TabletButtonHeight, MobileButtonHeight]
   text: string
}

export enum DesktopButtonWidth {
   S = 'button-desktop-width-small',
   M = 'button-desktop-width-medium',
   L = 'button-desktop-width-large',
   XL = 'button-desktop-width-extra-large',
}

export enum TabletButtonWidth {
   S = 'button-tablet-width-small',
   M = 'button-tablet-width-medium',
   L = 'button-tablet-width-large',
   XL = 'button-tablet-width-extra-large',
}

export enum MobileButtonWidth {
   S = 'button-mobile-width-small',
   M = 'button-mobile-width-medium',
   L = 'button-mobile-width-large',
   XL = 'button-mobile-width-extra-large',
}

export enum DesktopButtonHeight {
   S = 'button-desktop-height-small',
   M = 'button-desktop-height-medium',
   L = 'button-desktop-height-large',
   XL = 'button-desktop-height-extra-large',
}

export enum TabletButtonHeight {
   S = 'button-tablet-height-small',
   M = 'button-tablet-height-medium',
   L = 'button-tablet-height-large',
   XL = 'button-tablet-height-extra-large',
}

export enum MobileButtonHeight {
   S = 'button-mobile-height-small',
   M = 'button-mobile-height-medium',
   L = 'button-mobile-height-large',
   XL = 'button-mobile-height-extra-large',
}
