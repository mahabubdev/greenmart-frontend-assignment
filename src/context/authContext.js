import {
    useState, useContext, createContext
} from 'react';

const authContext = createContext();

/**=== Auth Context data ===*/
const AuthContextData = () => {
    const [auth, setAuth] = useState({
        isAuth: false,
        name: '', email: '', photo: '',
        cart: []
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

    const addToCart = (pd) => {

        const {cart} = auth;

        let newCart = [...cart, pd]

        setAuth({
            ...auth,
            cart: newCart
        })
    }

    const logoutUser = () => {
        setAuth({
            name: '', email: '', photo: '',
            isAuth: false,
            cart: []
        });
    }

    // returns
    return {
        auth,
        addToCart,
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