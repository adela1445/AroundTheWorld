import React, { useRef, useContext } from 'react'
import './Score.css'
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
        <div className="dataText">
        score is: 
        {score.score}
      </div>
  )
}

function Score() {

  return (
    <div id="bodyStyle">
      <br></br>
      <br></br>

      <center>
        
        <form className="formStyle">
        <br></br>

          <h2 className="dataText">
        View your recent quiz performance on this page!
          </h2>
         
          <br></br>
          <br></br>
          <h4 className="dataText1">Last quiz # of correct answers: </h4>
          <br></br>
          <ScoreCard />
          <br></br>

        </form>
      </center>
      <br></br>
      <br></br>
      <br></br>
     
      <p></p>
      <br></br>
      <br></br>
      <br></br>
    <center>
    
    </center>
    </div>
  )
}

export default Score


