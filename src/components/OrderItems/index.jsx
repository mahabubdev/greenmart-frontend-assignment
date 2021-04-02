import React from 'react';

const OrderItem = ({ item }) => {

    console.log(item)

    return (
        <div className="order_item">
                    <div className="od_top">
                        <span className="oid">{'#Order Id: ' + item._id}</span>
                        <span className="oid">{new Date(item.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="od_body">
                        <div className="od_products" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            width: '50%'
                        }}>
                            {item.products.map(p => (
                                <p style={{
                                    fontSize: '.85rem',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '.5rem',
                                    margin: '.5rem'
                                }} key={p._id}>
                                    <img src={p.photo} alt={p.name} style={{
                                        maxWidth: '2.5rem', height: 'auto'
                                    }} />
                                    <span>{p.name}</span>
                                </p>
                            ))}
                        </div>
                        <div className="od_price">
                            <span style={{fontSize: '1.5rem'}}>{'cost : $' + item.cost}</span>
                        </div>
                        <div className="od_status">
                            <span style={{textTransform: 'capitalize'}}>{item.status}</span>
                        </div>
                    </div>
                </div>
    );
};

export default OrderItem;