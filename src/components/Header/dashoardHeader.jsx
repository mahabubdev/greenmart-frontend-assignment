import React, {useEffect, useState} from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';
import { GrMenu, GrClose, GrApps } from "react-icons/gr";

const Header = ({ user, togSide, screen, setScreen, ...props }) => {
    const { auth, logoutUser } = useAuthContext();
    const [togSidebar, setTogSidebar] = useState(false);
    const [togMenu, seTogMenu] = useState(false);

    const toggleMenu = () => seTogMenu(! togMenu);

    let currentScreen = screen < 1200 ? 'small' : 'big';
    let mobileMenu = togMenu ? 'open' : '';

    const toggleSidebar = () => {
        setTogSidebar(! togSidebar)
        togSide(togSidebar)
    };

    // window resize or screen-size
    useEffect(() => {
        const resizeScreen = () => {
            setScreen(window.innerWidth);
        }

        window.addEventListener('resize', resizeScreen);
        return () => window.removeEventListener('resize', resizeScreen);
    }, [])


    return (
        <header className={`header dashboard_header ${currentScreen}`}>
            <div className="container">

                {
                    screen < 1100 ? (
                        <span className="tog">
                            {
                                <span className="menu-btn" onClick={toggleSidebar}>
                                    <GrApps />
                                </span>
                            }
                        </span>
                    ) : (null)
                }

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