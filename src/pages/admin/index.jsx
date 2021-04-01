import React, { useState, useEffect } from 'react';
import Dashboard from '../../layouts/Dashboard'
import Loading from '../../components/loading'
import ProductTable from '../../components/Table'

const DashboardIndex = () => {

    // states
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);


    // fetch products
    useEffect(() => {
        async function getProducts() {
            await fetch(process.env.REACT_APP_API_SERVER + '/api/products', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(pd => pd.json())
            .then(dt => {
                console.log(dt)
                setProducts([...dt])
                setLoaded(true)
            })
            .catch(err => console.log(err))
        }

        if (loaded === false) {
            getProducts();
        }
        
    }, [loaded])


    return (
        <Dashboard>
            <div className="table_container">
                {
                    loaded === true ?
                    (
                        <ProductTable 
                            products={products}  
                            loader={setLoaded}
                        />
                    ) : (<Loading />)
                }
            </div>
        </Dashboard>
    )
} 

export default DashboardIndex