import React, {useEffect, useState} from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { GrMenu, GrClose } from "react-icons/gr";

const Header = ({ user, ...props }) => {


    const { auth, logoutUser } = useAuthContext();

    const [screen, setScreen] = useState(window.innerWidth);
    const [togMenu, seTogMenu] = useState(false);

    const toggleMenu = () => seTogMenu(! togMenu);

    let currentScreen = screen < 1200 ? 'small' : 'big';
    let mobileMenu = togMenu ? 'open' : '';

    // window resize or screen-size
    useEffect(() => {
        const resizeScreen = () => {
            setScreen(window.innerWidth);
        }

        window.addEventListener('resize', resizeScreen);
        return () => window.removeEventListener('resize', resizeScreen);
    }, [])

    return (
        <header className={`${currentScreen} header default`}>
            <div className="container">
                <div className="logo_area">
                    <span className="logo">green mart</span>
                </div>

                {
                    currentScreen === 'small' ? (
                        <span className="menu-btn" onClick={toggleMenu}>
                            <GrMenu />
                        </span>
                    ) : (
                        null
                    )
                }

                <ul className={`menu ${mobileMenu}`}>

                    {
                        currentScreen === 'small' ? (
                            <span className="cls-btn" onClick={toggleMenu}>
                                <GrClose />
                            </span>
                        ) : (null)
                    }

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