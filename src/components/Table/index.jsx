import React from 'react';
import "./table.scss";
import { VscTrash } from "react-icons/vsc";
import swal from 'sweetalert';


const ProductTable = ({ products, loader }) => {


    // delete 
    const delProduct = async (pid) => {
        // console.log("del==>", pid)
        await fetch(`${process.env.REACT_APP_API_SERVER}/api/products/del/${pid}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(fdbk => {
            swal({
                title: `${fdbk.message}`,
                icon: 'success'
            })
            loader(false)
        })
        .catch(err => swal({
            title: `${err.message}`,
            icon: 'error'
        }))
    }

    // sweet alert
    const confirmDelAlert = (pid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                delProduct(pid)
            } else {
                swal("Operation aborted");
            }
        });
    }



    return (
        <table className="table_area">
            {
                products && products.length > 0 ? (
                    <>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Weight</th>
                            <th>Actions</th>
                        </tr>

                        {products.map(pd => (
                            <tr key={pd.pid}>
                                <td>
                                    <img src={pd.photo} alt={pd.name} />
                                </td>
                                <td>{pd.name}</td>
                                <td>{'$' + pd.price}</td>
                                <td>{pd.weight}</td>
                                <td>
                                    <span className="btn-del" onClick={() => confirmDelAlert(pd.pid)}>
                                        <VscTrash />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </>
                ) : (
                    <tr>
                        <td style={{border: 0}}>
                            <span style={{color: 'red'}}>Inventory empty</span>
                        </td>
                    </tr>
                )
            }
        </table>
    );
};

export default ProductTable;