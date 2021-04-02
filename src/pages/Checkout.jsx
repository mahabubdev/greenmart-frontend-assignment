import React, {useState, useEffect} from 'react';
import Default from '../layouts/Default';
import { useAuthContext } from '../context/authContext'
import swal from 'sweetalert';

const Checkout = () => {

    const [info, setInfo] = useState({
        subTotal: 0,
        total: 0,
        vat: 10
    });

    const { auth } = useAuthContext();
    const { cart } = auth;

    // checkout & order
    const makeOrder = async ({ c, i }) => {
        await fetch(`${process.env.REACT_APP_API_SERVER}/api/orders/add`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                email: auth.email,
                cart,
                cost: info.total
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            swal({
                title: data.message,
                text: `user: ${data.data.user}`,
                icon: 'success'
            })
        })
        .catch(err => {
            console.log(err)
            swal({
                title: err.message,
                icon: 'error'
            })
        })
    }


    useEffect(() => {
        function calculateCart(arr) {
            let subTotal = arr.reduce((a, b) => {
                return a + b.price
            }, info.subTotal)
    
            let total = (subTotal / 100) * info.vat + subTotal;
    
            setInfo({
                ...info,
                subTotal: parseFloat(subTotal).toFixed(2),
                total: parseFloat(total).toFixed(2)
            })
        }

        calculateCart(cart);
    }, [])

    return (
        <Default>
            <div className="checkout_page">
                <h1 style={{textTransform: 'capitalize'}}>checkout</h1>

                <div className="checkout_view">
                    <p style={{textAlign: 'center'}}>{'in cart: ' + cart.length}</p>
                    <table className="items" border="1">
                        <thead>
                            <tr>
                                <th>product description</th>
                                <th>product weight</th>
                                <th>product quantity</th>
                                <th>product price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cart.length > 0 ?
                            (
                                cart.map(c => (
                                    <tr key={c.pid}>
                                        <td>{c.name}</td>
                                        <td>{c.weight}</td>
                                        <td>{c.qty}</td>
                                        <td>{'$' + c.price}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td>Your cart is empty!</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>

                    <div className="checkout_part">
                        <p>SubTotal: {'$' + info.subTotal}</p>
                        <p>Total: {'$' + info.total + ' (including 10% vat)'}</p>
                        <p>
                            <button className="btn-pr" type="button" onClick={() => makeOrder({ cart, info })}>checkout</button>
                        </p>
                    </div>
                </div>
            </div>
        </Default>
    );
};

export default Checkout;