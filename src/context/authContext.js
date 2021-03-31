import {
    useState, useContext, createContext
} from 'react';

const authContext = createContext();

/**=== Auth Context data ===*/
const AuthContextData = () => {
    const [auth, setAuth] = useState({
        isAuth: false,
        name: '', email: '', photo: ''
    });

    /**--- Actions ---*/
    const loginUser = (usr) => {
        setAuth({
            ...auth,
            name: usr.name,
            email: usr.email,
            photo: usr.photo,
            isAuth: true
        });
    }

    const logoutUser = () => {
        setAuth({
            name: '', email: '', photo: '',
            isAuth: false
        });
    }

    // returns
    return {
        auth,
        loginUser,
        logoutUser
    }
}



/**=================================*
 * Auth Context provider
 *==================================*/

export function AuthContextProvider({ children, ...rest }) {
    const authCtx = AuthContextData();

    return (
        <authContext.Provider value={authCtx}>
            { children }
        </authContext.Provider>
    );
}


/**=================================*
 * Auth Context custom Hook
 *==================================*/
export function useAuthContext() {
    return useContext(authContext);
}