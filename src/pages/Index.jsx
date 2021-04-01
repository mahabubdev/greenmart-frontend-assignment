import React, { useEffect, useState } from 'react';
import Default from '../layouts/Default';
import Loading from '../components/loading';
import ProductCard from '../components/ProductCard';
import { useAuthContext } from '../context/authContext'

const Home = () => {

    const [products, setProducts] = useState([]);

    const authCtx = useAuthContext();

    useEffect(() => {
        async function getProducts() {
            await fetch(process.env.REACT_APP_API_SERVER + '/api/products', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(p => p.json())
            .then(d => {
                // console.log(d)
                setProducts([...d])
            })
            .catch(err => console.log(err))
        }

        getProducts();
    }, [])

    return (
        <Default>
            { products.length > 0 ? (
                <div className="products_container">
                    {
                        products.map(pd => (
                            <ProductCard key={pd.pid} pd={pd} actions={authCtx} />
                        ))
                    }
                </div>
            ) : (
                <Loading />
            )}
        </Default>
    );
};

export default Home;