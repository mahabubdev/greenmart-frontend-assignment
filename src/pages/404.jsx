import React from 'react';
import Default from '../layouts/Default';
import svg from '../404.svg';

const Notfound = () => {
    return (
        <Default>
            <img className="svg404" src={svg} alt="404" />
            <h1 style={{textAlign: 'center'}}>Page not found</h1>
        </Default>
    );
};

export default Notfound;