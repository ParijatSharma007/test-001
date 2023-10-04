import React from "react";

const UserContext = React.createContext({
    userInputs : [],
    updateUserInput : (item) => {},
    deleteUser : (id) => {}
})

export default UserContext