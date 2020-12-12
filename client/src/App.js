import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home/Home'
import PrivateRoute from './components/ProtectedHOC/ProtectedRoute'
import Login from './pages/Login/Login'
import Quiz from './pages/Quiz/Quiz'
import Profile from './pages/Profile/Profile'

import { UserProvider } from './context/userContext'
import scoreContext from './context/scoreContext'
// import { route } from '../../routes/api'

let user = {
  isLoggedIn:false,
  score: 0,
  timer: 0,
}

function App() {
  return (
    <Router>
      <div>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to=""
            exact={true}
            activeClassName="text-gray-700 bg-gray-100"
            inactiveClassName="text-gray-500 hover:text-gray-700"
            className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
          >
            AroundTheWorld
             
          </NavLink>
          <NavLink to="Home"
            exact={true}
            activeClassName="text-gray-700 bg-gray-100"
            inactiveClassName="text-gray-500 hover:text-gray-700"
            className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
          >
            Home
             
          </NavLink>
          <NavLink to="Quiz"
            exact={true}
            activeClassName="text-gray-700 bg-gray-100"
            inactiveClassName="text-gray-500 hover:text-gray-700"
            className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
          >
            Quiz
             
          </NavLink>
          <NavLink to="Profile"
            exact={true}
            activeClassName="text-gray-700 bg-gray-100"
            inactiveClassName="text-gray-500 hover:text-gray-700"
            className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
          >
            Profile
             
          </NavLink>
          </nav>
       
      </div>
      <UserProvider>
        <scoreContext.Provider value={user}>
        <div>
          <Switch>
            <PrivateRoute path='/home'>
              <Home />
            </PrivateRoute>
            <PrivateRoute path="/quiz">
              <Quiz />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>

            <Route exact path='/' component={(props) => <Login {...props} />} />
            <Route>
              <h1>404 NOT FOUND</h1>
            </Route>
          </Switch>
        </div>
       </scoreContext.Provider>
      </UserProvider>
    </Router>
  )
}

export default App
