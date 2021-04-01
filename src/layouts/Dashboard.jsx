import React from 'react';
import DashboardHeader from '../components/Header/dashoardHeader';
import AdminSidebar from '../components/Sidebar';

const DashboardLayout = ({ children, ...props }) => {
    return (
        <div className="layout_wrapper dashboard">
            <DashboardHeader />
            
            <AdminSidebar />

            <div className="container dashboard_container">
                { children }
            </div>
        </div>
    );
};

export default DashboardLayout;