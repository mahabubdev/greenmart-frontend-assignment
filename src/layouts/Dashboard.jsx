import React, {useState, useEffect} from 'react';
import DashboardHeader from '../components/Header/dashoardHeader';
import AdminSidebar from '../components/Sidebar';

const DashboardLayout = ({ children, ...props }) => {

    const [togSide, setTogSide] = useState(false);
    const [screen, setScreen] = useState(window.innerWidth);

    // window resize or screen-size
    useEffect(() => {
        const resizeScreen = () => {
            setScreen(window.innerWidth);
        }

        window.addEventListener('resize', resizeScreen);
        return () => window.removeEventListener('resize', resizeScreen);
    }, [])

    return (
        <div className="layout_wrapper dashboard">
            <DashboardHeader 
                togSide={setTogSide} 
                screen={screen}
                setScreen={setScreen}
            />
            
            <AdminSidebar togSide={togSide} />

            <div className="container dashboard_container">
                { children }
            </div>
        </div>
    );
};

export default DashboardLayout;