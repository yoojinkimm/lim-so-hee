import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({ user: null });

function UserProvider ({ render }) {
    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState('ko');


    

    return(
        <UserContext.Provider value={{
            user: user,
            setUser,
            language: language,
            setLanguage
        }}>
            {render}
        </UserContext.Provider>
    )
}

export default UserProvider;