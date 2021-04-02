import React, {useState, useEffect} from 'react';
import Default from '../layouts/Default';
import { useAuthContext } from '../context/authContext';
import swal from 'sweetalert';
import OrderItem from '../components/OrderItems';
import Loading from '../components/loading'

const Order = () => {

    const { auth } = useAuthContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function getUserOrders() {
            await fetch(`${process.env.REACT_APP_API_SERVER}/api/orders/?user=${auth.email}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(dt => {
                let allOrders = [...dt]
                setOrders(allOrders)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                swal({
                    title: err.message,
                    icon: 'error'
                })
                setLoading(false)
            })
        }

        getUserOrders();
    }, [])

    return (
        <Default>
            <h1>Your orders</h1>
            
            <div className="orders">
                {loading === true ? (<Loading />) : (
                    orders.length > 0 ? (
                        orders.map(o => (
                            <OrderItem key={o._id} item={o} />
                        ))
                    ) : (
                        <span>You have no orders yet! </span>
                    )
                )}
            </div>
        </Default>
    );
};

export default Order;