import React, { useState } from 'react';
import Dashboard from '../../layouts/Dashboard'
// import { useAuthContext } from '../../context/authContext'
import axios from 'axios'
import swal from 'sweetalert';

const AddProduct = () => {

    // const { auth } = useAuthContext();

    const notifyAlert = (ctx) => {
        swal({
            title: "Product added successfully!",
            text: "Your product ID:" + ctx._id + " \nand PID: " + ctx.pid,
            icon: "success"
        })
    }


    const [form, setForm] = useState({
        name: '',
        weight: '',
        price: '',
        photo: ''
    });

    const onChangeForm = async (event) => {
        if (event.target.name === 'photo') {
            setForm({
                ...form,
                photo: event.target.files[0]
            });
        } else {
            setForm({
                ...form,
                [event.target.name]: event.target.value
            })
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        // console.log(form)
        let formData = new FormData();
        for (let i=0; i<Object.keys(form).length; i++) {
            let key = Object.keys(form)[i]
            let val = Object.values(form)[i]
            // console.log("-->", key, "==", val)
            formData.append(key, val)
        }

        //send request
        let reqURI = process.env.REACT_APP_API_SERVER + '/api/products/add'
        await axios.post(reqURI, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response)
            notifyAlert(response.data)
        })
        .catch(err => console.log(err.message))

        // fetch(reqURI , {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         'Accept': 'application/json'
        //     },
        //     method: 'POST',
        //     body: formData
        // })
        // .then((response) => response.json())
        // .then((dt) => console.log(dt))
        // .catch(err => console.log(err))
    }


    return (
        <Dashboard>
            <form className="product_form" autoComplete="off" onSubmit={onSubmit}>
                <div className="form_fields">
                    <div className="ff">
                        <label htmlFor="pname">Product Name</label>
                        <input id="pname" type="text" name="name" 
                            onChange={onChangeForm}
                            placeholder="Enter Name : ex. Potato" />
                    </div>

                    <div className="ff">
                        <label htmlFor="pweight">Product Weight</label>
                        <input id="pweight" type="text" name="weight" 
                            onChange={onChangeForm}
                            placeholder="Enter Weight : ex. 200g or 1kg" />
                    </div>

                    <div className="ff">
                        <label htmlFor="pprice">Product Price ($ USD)</label>
                        <input id="pprice" type="text" pattern="[0-9.]+" name="price" 
                            onChange={onChangeForm}
                            placeholder="Enter Price : ex. 99.99" />
                    </div>


                    <div className="ff">
                        <label htmlFor="pimg">Product Photo</label>
                        <input id="pimg" type="file" 
                            onChange={onChangeForm}
                            accept=".png, .jpg, .jpeg"
                            name="photo" placeholder="Choose product photo" />
                    </div>
                </div>

                <div className="form_btns">
                    <button type="submit" className="btn-pr">save</button>
                </div>
            </form>
        </Dashboard>
    );
};

export default AddProduct;