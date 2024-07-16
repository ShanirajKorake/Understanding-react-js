import React,{useState} from 'react'
import UserContext from './context';

function ContextProvide({children}) {
    const [user, setuser] = useState();
    return (
        <UserContext.Provider value={{user,setuser}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvide
