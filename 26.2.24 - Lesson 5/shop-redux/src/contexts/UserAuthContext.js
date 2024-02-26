import { createContext, useState } from 'react';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState({isAdmin: false});

    return (
        <UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContext;