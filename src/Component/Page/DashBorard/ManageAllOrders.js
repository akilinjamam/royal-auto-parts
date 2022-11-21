import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        const url = 'https://ancient-crag-35082.herokuapp.com/manageOrder';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])



    const updateStatus = (id) => {


        const shipped = 'shipped'


        const updatedStatus = {

            status: shipped
        }



        // send data to the server:
        const url = `https://ancient-crag-35082.herokuapp.com/manageOrder/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStatus)
        })

            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)

                if (data) {
                    toast.success('status shipped');
                    // event.target.reset()

                }

            })

    }



    return (
        <div>
            <p className='color text-2xl font-bold text-left theFonts'>Manage Orders</p>
            <br />
            <h2 className='text-white text-left'>This section is Under Working</h2>

            {/* <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>

                            <th>Email</th>
                            <th>Total Quantity</th>
                            <th>Price/unit</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>payment Condition</th>
                            <th>transaction ID</th>
                            <th>payment Status</th>
                            <th>button</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders.map((order, index) => <tr order={order} key={order._id} className="hover">
                                <th>{index + 1}</th>
                                <th>{order.partsName}</th>
                                <th>{order.userName}</th>
                                <th>{order.userEmail}</th>
                                <th>{order.orderQuantity}</th>
                                <th>{order.pricePerUnit}</th>
                                <th>{order.phone}</th>
                                <th>{order.address}</th>
                                <th>
                                    {
                                        order.paid ? <p className='text-green-500'>paid</p> : <p className='text-red-500'>Not Paid</p>
                                    }
                                </th>

                                <th>
                                    {
                                        order.paid ? <p className='text-orange-500'> TransactionId: {order.transactionId}</p > : <p className='text-red-500'>Not Yet Pain</p>
                                    }
                                </th>

                                <th>
                                    {
                                        order.paid && <p className='text-pink-500 uppercase'>  {order.status}</p>
                                    }
                                </th>

                                <th>
                                    {
                                        order.paid && <button onClick={() => updateStatus(order._id)} className='btn btn-xs'> Shipped </button>
                                    }
                                </th>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div> */}

        </div>
    );
};

export default ManageAllOrders;



