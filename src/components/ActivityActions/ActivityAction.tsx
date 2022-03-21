import PhotoIcon from '../../icons/PhotoIcon'
import { ActivityActionProps } from './interfaces'

export default ({ username, action, time }: ActivityActionProps) => {
   return (
      <div className="activity-action">
         <div className="activity-action__photo">
            <PhotoIcon width={25} height={25} />
         </div>
         <p className="activity-action__action"></p>
      </div>
   )
}
