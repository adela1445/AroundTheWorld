import React, { useRef, useContext } from 'react'
import './Profile.css'
import scoreContext from '../../context/scoreContext'

// class ScoreCard extends React.Component {
//   let userContext = useContext(userContext)
//   // Assign a contextType to read the current theme context.
//   // React will find the closest theme Provider above and use its value.
//   // In this example, the current theme is "dark".
//   static contextType = userContext;
//   render() {
//     <p>{this.context}</p>
//   }
// }

function ScoreCard() {
  const score = useContext(scoreContext)
  console.log(score)
  return (
        <div>
        score is:
        {score.score}
      </div>
  )
}

function Profile() {

  return (
    <div id="bodyStyle">
      <br></br>
      <center>
      <h2 className ="dataText">
        {' '}
        View your recent quiz performance on this page!
      </h2>
      </center>
      <br></br>
      <br></br>
      <h4 className ="dataText">Last quiz # of correct answers: </h4>
      <ScoreCard/>
      <br></br>
      <br></br>
      <br></br>
      <h4 className ="dataText">Last quiz # of seconds remaining: </h4>
      <p></p>
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


