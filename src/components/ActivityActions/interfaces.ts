import { ActivityActions } from '../../utils/constants'


export interface ActivityActionProps {
   readonly username: string
   readonly action: ActivityActions
   readonly time: Date
}