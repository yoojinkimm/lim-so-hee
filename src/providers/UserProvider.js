import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({ user: null });

function UserProvider ({ render }) {
    const [user, setUser] = useState(null);

    // 각 폴더의 창이 열린 채로 유지되도록
    const [finder, setFinder] = useState(false);
    const [f2020, setF2020] = useState(false);
    const [job, setJob] = useState(false);
    const [taxi, setTaxi] = useState(false);

    // dock에서 매번 새로 불러오는 창의 상태를 유지
    // const [nowFolder, setNowFolder] = useState([]);
    // const [update, setUpdate] = useState(false);


    // useEffect(() => {
    //     console.log(nowFolder)
    // }, [update])
    


    

    return(
        <UserContext.Provider value={{
            user: user,
            setUser,
            finder, setFinder,
            f2020, setF2020,
            job, setJob,
            // nowFolder, setNowFolder,
            // update, setUpdate,
            taxi, setTaxi
        }}>
            {render}
        </UserContext.Provider>
    )
}

export default UserProvider;