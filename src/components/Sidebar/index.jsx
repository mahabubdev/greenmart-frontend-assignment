import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { VscAdd } from "react-icons/vsc";
import { BsGrid } from "react-icons/bs";

const AdminSidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo_area">
                <span style={{color: 'white'}} className="logo">green mart</span>
            </div>

            <ul className="side_menu">
                <li><NavLink exact activeClassName="active" to="/admin"><BsGrid /> manage products</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin/add"><VscAdd /> add product</NavLink></li>
            </ul>
        </div>
    );
};

export default AdminSidebar;