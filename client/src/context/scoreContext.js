import React, {createContext, useContext} from 'react'

let user = {
    isLoggedIn:false,
    score: 0,
    timer: 0,
}

let scoreContext = createContext(user)


export default  scoreContext
