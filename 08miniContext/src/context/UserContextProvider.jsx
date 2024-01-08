// PART 02  make provider file of context and make it jsx 
// we use children parameter it basically the variable that we get we will pass as it is further. just like (outlet)

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user , setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user , setUser}}>
        {children}
        </UserContext.Provider>
    )
    
}

export default UserContextProvider
