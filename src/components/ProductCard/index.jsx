import React from 'react';
import './productCard.scss';
import {useLocation, useHistory} from 'react-router-dom';

const ProductCard = ({ pd, actions }) => {

    const history = useHistory();
    const location = useLocation();

    const {addToCart} = actions;

    const addInCart = (item) => {
        addToCart(item)
        history.replace('/checkout', {
            state: location
        })
    }

    return (
        <div className="pd_card">
            <img src={pd.photo} alt={pd.name} />

            <div className="ptxt">
                <h3>{pd.name}</h3>
                <div className="pinfo">
                    <span style={{color: '#57b74f', fontSize: '1.5rem'}}><b>{'$' + pd.price}</b></span>
                    <span className="btn-pr" onClick={() => addInCart(pd)}>buy now</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;