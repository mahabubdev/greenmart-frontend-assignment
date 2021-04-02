import {
    useState, useContext, createContext
} from 'react';
import swal from 'sweetalert';

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

    const addToCart = (product) => {

        const {cart} = auth;

        function check(arr) {
            let res = false;

            for (let c=0; c<cart.length; c++) {
                if (cart[c].pid === product.pid) {
                    res = true
                }
            }

            return res;
        }

        // check duplicate
        if (cart.length > 0 && check(cart)) {
            // found
            console.log(cart, product)
            swal({
                title: 'Sorry! duplicate request.',
                icon: 'error'
            })
        } else {
            // safe to add
            let newCart = [...cart, {...product, qty: 1}]

            setAuth({
                ...auth,
                cart: newCart
            })
        }
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