import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Navbar/Loading/Loading';


const ManageAllOrders = () => {

    // const [allOrders, setAllOrders] = useState([])

    const { data: allOrders, isLoading, refetch } = useQuery('orders', () => fetch('https://royal-autoparts-re-server.onrender.com/orders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')} `

        }
    }).then(res => res.json()))


    console.log(allOrders)



    const updateStatus = (id) => {



        const shipped = 'shipped'


        const updatedStatus = {

            status: shipped
        }

        // send data to the server:
        const url = `https://royal-autoparts-re-server.onrender.com/orders/${id}`
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
                refetch();
                if (data) {
                    toast.success('status shipped');
                    // event.target.reset()

                }

            })

    }

    if (isLoading) {

        return <Loading></Loading>
    }

    return (
        <div>

            <p className='color text-2xl font-bold text-left theFonts'>Manage All Orders</p>
            <br />
            <div class="overflow-x-auto">
                {
                    allOrders?.map(a => {
                        return (
                            <div>
                                {
                                    a?.transactionId &&
                                    <div className='w-5/6 flex text-left text-white border-b mb-5'>
                                        <div className='w-1/2'>
                                            <p>Parts Name: {a.partsName} </p>
                                            <p>Email: {a.userEmail} </p>
                                            <p>Order Quantity: {a.orderQuantity} </p>
                                            <p>Price/U: {a.pricePerUnit} </p>
                                            <p>Address: {a.address} </p>
                                        </div>
                                        <div className='w-1/2'>
                                            <p>Phone: {a.phone} </p>
                                            {
                                                a.status && <p>Status: {a.status}</p>
                                            }
                                            {
                                                a.transactionId && <p>Transaction Id: {a.transactionId}</p>
                                            }
                                            {
                                                a.status === 'panding' &&
                                                <p>
                                                    Change Status :  <span>
                                                        <button className='btn btn-xs' onClick={() => updateStatus(a._id)}>Make Shift</button>
                                                    </span>
                                                </p>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;



