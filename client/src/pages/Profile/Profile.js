import React, { useRef } from 'react'
import './Profile.css'
// link rel="stylesheet" type="text/css" href="Profile.css"

function Profile() {
  return (
    <div>
      <h1 class="bodyText">Welcome to your quiz profile!</h1>
      <h2>
        {' '}
        View your recent quiz performance on this page!
      </h2>
      <h3 class="bodyText">Last quiz # of correct answers: </h3>
  <h4 class="importScore">{}</h4>
      <br></br>
      <h3 class="bodyText">Last quiz # of seconds remaining: </h3>
  <h4 class="importScore">{}</h4>
      <br></br>
      <br></br>
      <br></br>
    <button type="button" id="homeButton" onclick="Home.js">Return to Home</button>
    </div>
  )
}

export default Profile