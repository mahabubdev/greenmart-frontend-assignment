import React, { useEffect, useState } from 'react';
import Default from '../layouts/Default';
import Loading from '../components/loading';
import ProductCard from '../components/ProductCard';
import { useAuthContext } from '../context/authContext'

const Home = () => {

    const [products, setProducts] = useState([]);
    const [q, setQ] = useState('');
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);

    const authCtx = useAuthContext();

    // search

    const fetchOnSearch = async () => {
        if (q === "") {
            // no search, get all
            setLoaded(false)
        } else {
            // search 
            await fetch(process.env.REACT_APP_API_SERVER + '/api/products?search=' + q, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(_p => _p.json())
            .then(_d => {
                // console.log(d)
                let result = [..._d]
                setProducts(result)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
        }
    }

    const onTypeSearch = (event) => {
        console.log(event.target.value)
        setQ(event.target.value)
        setLoading(true)
        fetchOnSearch()
    }

    const onSearchProduct = async (event) => {
        event.preventDefault();
        setLoading(true)
        await fetchOnSearch();
        setQ('')
    }

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
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setLoaded(true)
            })
        }

        if (loaded === false) {
            getProducts();
        }
    }, [loaded])

    return (
        <Default>
            <div className="search">
                <form className="search_bar" onSubmit={onSearchProduct} autoComplete='off'>
                    <input type="text" name="search" onChange={onTypeSearch} placeholder="search products" />
                    <button className="btn-pr btn-search" type="submit">search</button>
                </form>
            </div>

            {
                loading === true ? (<Loading />) : (
                    products.length > 0 ? (
                        <div className="products_container">
                            {
                                products.map(pd => (
                                    <ProductCard key={pd.pid} pd={pd} actions={authCtx} />
                                ))
                            }
                        </div>
                    ) : (
                        <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>Sorry! There is no product now.</p>
                    )
                )
            }
        </Default>
    );
};

export default Home;