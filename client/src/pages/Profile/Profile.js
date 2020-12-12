import React, { useRef } from 'react'
import './Profile.css'
// link rel="stylesheet" type="text/css" href="Profile.css"

function Profile() {
  return (
    <div>
      <h1 className="bodyText">Welcome to your quiz profile!</h1>
      <h2>
        {' '}
        View your recent quiz performance on this page!
      </h2>
      <h3 className="bodyText">Last quiz # of correct answers: </h3>
  <h4 className="importScore">{}</h4>
      <br></br>
      <h3 className="bodyText">Last quiz # of seconds remaining: </h3>
  <h4 className="importScore">{}</h4>
      <br></br>
      <br></br>
      <br></br>
      <Button />
    </div>
  )
}

export default Profile
