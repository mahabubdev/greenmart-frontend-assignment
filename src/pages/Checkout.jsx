import React from 'react';
import Default from '../layouts/Default';
import { useAuthContext } from '../context/authContext'

const Checkout = () => {

    const { auth } = useAuthContext();

    return (
        <Default>
            <div className="checkout_page">
                <h1 style={{textTransform: 'capitalize'}}>checkout</h1>

                <div className="checkout_view">
                    in cart : {auth.cart.length}
                </div>
            </div>
        </Default>
    );
};

export default Checkout;