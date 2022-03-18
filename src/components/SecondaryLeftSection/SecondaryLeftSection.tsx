import ActivityActions from '../ActivityActions'


export default () => {
   return <div className="left-section">
      <div className="left-section__activity">
         <div className="left-section__activity__header">
            <h1 className="left-section__activity__header__title">
               Activity
            </h1>
            <p className="left-section__activity__header__see-all">
               See all
            </p>
         </div>
         <div className="left-section__activity__content">
            {/*<ActivityActions/>*/}
         </div>
      </div>
      <div className="left-section__explore">
         <div className="left-section__explore__header">
            <h1 className="left-section__explore__header__title">
               Explore
            </h1>
            <p className="left-section__activity__header__see-all">
               See all
            </p>
         </div>
      </div>
   </div>
}