import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

const Header = ({ user, ...props }) => {


    const { auth, logoutUser } = useAuthContext();

    return (
        <header className="header dashboard_header">
            <div className="container">
                <ul className="menu" style={{ display: 'flex', width: '100%' }}>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/orders">orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">deals</Link>
                    </li>
                    {
                        auth.isAuth === false ?
                        (<li><Link to="/login" className="btn-pr">login</Link></li>)
                        : 
                        (
                            <>
                                <li>
                                    <img src={auth.photo} alt="user" className="nav_user_img" />
                                </li>
                                <li><button className="btn-pr" type="button" onClick={logoutUser}>logout</button></li>
                            </>
                        )
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;