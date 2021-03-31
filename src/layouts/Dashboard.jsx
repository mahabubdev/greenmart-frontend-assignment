import React from 'react';

const DashboardLayout = ({ children, ...props }) => {
    return (
        <div className="layout_wrapper dashboard">
            <h1>Header Area</h1>
            <h2>Sidebar Area</h2>
            <div className="container_area">
                { children }
            </div>
        </div>
    );
};

export default DashboardLayout;