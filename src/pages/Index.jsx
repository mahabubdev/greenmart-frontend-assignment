import React, { useEffect, useState } from 'react';
import Default from '../layouts/Default';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            await fetch(process.env.REACT_APP_API_SERVER + '/api/products', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(p => p.json())
            .then(d => {
                console.log(d)
                setProducts([...d])
            })
            .catch(err => console.log(err))
        }

        getProducts();
    }, [])

    return (
        <Default>
            <p>
                { products.length > 0 ? products.length : (
                    <span style={{color: 'red'}}>Empty products</span>
                ) }
            </p>
        </Default>
    );
};

export default Home;