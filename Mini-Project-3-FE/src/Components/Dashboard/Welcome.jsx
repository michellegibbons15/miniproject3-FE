import React from 'react'
import "../../Styles/Dashboard/Welcome.css"
import soccerImg from "../../assets/dashboard/Profile.png"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'


const Welcome = () => {
  return (
    <div className="Welcome">
      <img src={soccerImg} alt="Michelle" className="profile"/>
        <div className="welcome-bar">
          <h1>Welcome back, Michelle!</h1>
          <h4><FontAwesomeIcon icon={faBell} />Notifications</h4>
        </div>
    </div>
  )
}

export default Welcome
