import React, {createContext, useContext} from 'react'

export const  userContext = createContext({user:{
    isLoggedIn:false,
    score: 0,
    timer: 0,
}})
