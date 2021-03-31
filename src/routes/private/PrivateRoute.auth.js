import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

export function PrivateRoute ({ location, ...rest }) {
    let authStatus = useAuthContext();  // auth status

    return (
        <>
            {
                authStatus.auth.isAuth === true ? (
                    <Route {...rest} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location,
                                message: 'Please login first'
                            }
                        }}
                    />
                )
            }
        </>
    );
}