import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import PrivateRoute from './components/ProtectedHOC/ProtectedRoute'
import Login from './pages/Login/Login'
import Quiz from './pages/Quiz/Quiz'
import Profile from './pages/Profile/Profile'

import { UserProvider } from './context/userContext'
// import { route } from '../../routes/api'
function App() {
  return (
    <Router>
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <UserProvider>
        <div>
          <Switch>
            <PrivateRoute path='/home'>
              <Home />
            </PrivateRoute>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route exact path='/' component={(props) => <Login {...props} />} />
            <Route>
              <h1>404 NOT FOUND</h1>
            </Route>
          </Switch>
        </div>
      </UserProvider>
    </Router>
  )
}

export default App
