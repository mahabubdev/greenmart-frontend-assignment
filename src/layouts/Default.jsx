import React from 'react';
import Header from '../components/Header'

const DefaultLayout = ({ children, ...props }) => {
    return (
        <div className="layout_wrapper default">
            <Header />
            
            <div className="container">
                { children }
            </div>
        </div>
    );
};

export default DefaultLayout;