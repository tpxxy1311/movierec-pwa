import LoginContext from '../context/logincontext'
import { useState } from 'react'

function ContextWrapper({children, lgInfo, cookieInfo, seenlistNumbers, watchlistNumbers, reclistNumbers}) {
    
    const [loginState, setLoginState] = useState(lgInfo)
    const [cookieAccept, setCookieAccept] = useState(cookieInfo)
    const [userSeenlist, setUserSeenlist] = useState(seenlistNumbers)
    const [userWatchlist, setUserWatchlist] = useState(watchlistNumbers)
    const [userReclist, setUserReclist] = useState(reclistNumbers)
    const [isActive, setActive] = useState(false);

    return (
        <LoginContext.Provider value={{isActive, setActive, loginState, setLoginState, cookieAccept, setCookieAccept, userSeenlist, setUserSeenlist, userWatchlist, setUserWatchlist, userReclist, setUserReclist}}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextWrapper;