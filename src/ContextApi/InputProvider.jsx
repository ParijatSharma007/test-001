import React, { useState } from 'react'
import UserContext from './user-context'


const InputProvider = ({ children }) => {
    const [userInputs, setUserInput] = useState([])

    const userContext = {
        userInputs : userInputs,
        addUser : (item) => {setUserInput([...userInputs,item])},
        deleteUser : (id) => {setUserInput(userInputs?.filter(item => item.id !== id))}
    }
    return (
        <UserContext.Provider value={userContext}>
            {children}
        </UserContext.Provider>
    )
}

export default InputProvider