import React from 'react';
import './header.scss';
import {
    Link, useHistory
} from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

const Header = ({ user, ...props }) => {

    const history = useHistory();

    return (
        <header className="header default">
            <h1>Header Area</h1>
        </header>
    );
};

export default Header;