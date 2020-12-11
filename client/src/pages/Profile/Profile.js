import React, { useRef } from 'react'
import './Profile.css'
import Background from './profileWallpaper.jpeg';

// link rel="stylesheet" type="text/css" href="Profile.css"

function Profile() {
  return (
    <div>
      <img src={Background}></img>
      {/* <h1 className="bodyText">Welcome to your quiz profile!</h1> */}
      <center>
      <h2>
        {' '}
        View your recent quiz performance on this page!
      </h2>
      </center>
      <br></br>
      <br></br>
      <h4 className ="dataText">Last quiz # of correct answers: </h4>
  {/* <h4 className="importScore">{}</h4> */}
      <br></br>
      <br></br>
      <br></br>
      <h4 className ="dataText">Last quiz # of seconds remaining: </h4>
  {/* <h4 className="importScore">{}</h4> */}
      <br></br>
      <br></br>
      <br></br>
    <center>
    <button type="button" id="homeButton" onclick="Home.js">Return to Home</button>
    </center>
    </div>
  )
}

export default Profile
