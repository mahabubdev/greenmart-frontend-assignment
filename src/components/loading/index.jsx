import React from 'react';
import { CgSpinner } from "react-icons/cg";

const Loading = () => {
    return (
        <div className="loading_container">
            <CgSpinner className="loading" />
        </div>
    );
};

export default Loading;