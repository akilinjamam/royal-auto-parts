import { signOut } from 'firebase/auth';
import './MyOrder.css'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Navbar/Loading/Loading';

import DeleteUser from './DeleteUser';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [deleteUsers, setDeleteUsers] = useState(null)
    const navigate = useNavigate()
    const [myOrders, setMyOrders] = useState([])




    useEffect(() => {
        if (user) {
            const email = user?.email
            fetch(`https://royal-autoparts-re-server.vercel.app/orders?userEmail=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')} `
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 403 || res.status === 401) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    setMyOrders(data)
                })
        }
    }, [user]);

    const findMyOrders = myOrders?.filter(m => {
        return m.userEmail === user.email
    });
    console.log(findMyOrders);




    if (!myOrders) {
        return <Loading></Loading>
    }



    return (


        <div >
            <p className='color text-2xl text-left font-bold theFonts OrderTtitle'>My Orders</p>
            <br />
            <div className='OrderMain'>
                {
                    findMyOrders.map((order, index) =>

                        <div className='border-b-2 border-red-600 pb-5 pt-5 mr-7'>
                            <div className='flex text-left justify-between text-white resOrderDetail'>
                                {/* div one */}
                                <div style={{ width: '' }}>
                                    <p>Order No: {index + 1}</p>
                                    <p>Name: {user.displayName}</p>
                                    <p>Email: {order.userEmail}</p>
                                    <p>Parts Name: {order.partsName}</p>
                                    <p>Address: {order.address} </p>
                                </div>

                                {/* div two */}
                                <div style={{ width: '' }}>

                                    <p>Phone: {order.phone} </p>
                                    <br />
                                    <p>Order Quantity: {order.orderQuantity} </p>
                                    <p>Price Per Unit: {order.pricePerUnit} </p>
                                    <p>payment Status: {order?.transactionId ? <p>Paid</p> : <p>Not Paid</p>} </p>
                                </div>
                                {/* div three */}

                                <div style={{ width: '350px' }}>
                                    {
                                        order?.transactionId && <p> Transaction ID: {order.transactionId} </p>
                                    }

                                    {
                                        order?.status && <p>Order Status: {order.status} </p>
                                    }
                                </div>


                            </div>
                            <br />
                            <div className='flex text-white'>
                                <div className='text-left'>
                                    {order?.transactionId ? <button disabled className='btn btn-xs text-white'>Delete Order</button> : <label onClick={() => setDeleteUsers(order)} for="delete-user" class="btn btn-xs" >Delete Order</label>}

                                    {/* Modal for deleting Order */}
                                    {
                                        deleteUsers && <DeleteUser deleteUsers={deleteUsers} setDeleteUsers={setDeleteUsers}></DeleteUser>
                                    }
                                </div>

                                <div className='ml-10'>
                                    {order?.transactionId ? <p class="btn btn-xs cursor-not-allowed">paid</p> : <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs">payment</button></Link>}
                                </div>
                            </div>

                        </div>

                    )
                }
            </div>
            {/* for responsiveness */}
            <div className='resOrder'>
                <p className='color text-2xl text-left ml-5  font-bold theFonts'>My Orders</p>
                <div>
                    {
                        myOrders.map((order, index) => <div className='border-b-2 border-red-600 pb-5 pt-5 mr-7'>
                            <div className=' text-white text-left ml-5'>
                                {/* div one */}
                                <div style={{ width: '' }}>
                                    <p>Order No: {index + 1}</p>
                                    <p>Name: {order.userName}</p>
                                    <p>Email: {order.userEmail}</p>
                                    <p>Parts Name: {order.partsName}</p>
                                    <p>Address: {order.address} </p>
                                </div>

                                {/* div two */}
                                <div style={{ width: '' }}>

                                    <p>Phone: {order.phone} </p>
                                    <br />
                                    <p>Order Quantity: {order.orderQuantity} </p>
                                    <p>Price Per Unit: {order.pricePerUnit} </p>
                                    <p>payment Status: {order?.transactionId ? <p>Paid</p> : <p>Not Paid</p>} </p>
                                </div>
                                {/* div three */}

                                <div style={{ width: '350px' }}>
                                    {
                                        order?.transactionId && <p> Transaction ID: {order.transactionId} </p>
                                    }

                                    {
                                        order?.status && <p>Order Status: {order.status} </p>
                                    }
                                </div>


                            </div>
                            <br />
                            <div className='flex text-white'>
                                <div className='text-left'>
                                    {order?.transactionId ? <button disabled className='btn btn-xs text-white'>Delete Order</button> : <label onClick={() => setDeleteUsers(order)} for="delete-user" class="btn btn-xs" >Delete Order</label>}

                                    {/* Modal for deleting Order */}
                                    {
                                        deleteUsers && <DeleteUser deleteUsers={deleteUsers} setDeleteUsers={setDeleteUsers}></DeleteUser>
                                    }
                                </div>

                                <div className='ml-10'>
                                    {order?.transactionId ? <p class="btn btn-xs cursor-not-allowed">paid</p> : <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs">payment</button></Link>}
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;


/* 

  useEffect(() => {
        if (user) {
            const email = user?.email
            fetch(`https://royal-autoparts-re-server.vercel.app/orders?userEmail=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setMyOrders(data)
                })
        }
    }, [user])



     const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://royal-autoparts-re-server.vercel.app/orders?userEmail=${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')} `

        }
    }).then(res => res.json()))



    if (isLoading) {
        return <Loading></Loading>
    }




*/




/* 

<div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Orders</th>
                                <th>Quantity</th>
                                <th>price/Unit</th>
                                <th>address</th>
                                <th>phone</th>
                                <th>delete</th>
                                <th>payment status</th>
                                <th>status condition</th>
                                <th>Transaction Id</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myOrders.map((order, index) => <tr order={order} key={order._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.partsName}</td>
                                    <td>{order.orderQuantity}</td>
                                    <td>{order.pricePerUnit}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>

                                    <td>

                                        {order?.transactionId ? <button disabled className='btn btn-xs'>Delete</button> : <label onClick={() => setDeleteUsers(order)} for="delete-user" class="btn btn-xs" >delete</label>}

                                    </td>



                                    <td>{order?.transactionId ? <p class="btn btn-xs cursor-not-allowed">paid</p> : <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-xs">payment</button></Link>}</td>


                                    <td>
                                        {
                                            order?.status && <p className='font-bold'> Status : <span className='text-orange-400'>{order.status}</span> </p>
                                        }

                                    </td>

                                    <td>
                                        {
                                            order.transactionId && <p className='text-green-500 font-bold'> <span className='text-black'>TransactionId :</span> {order.transactionId} </p>
                                        }
                                    </td>

                                </tr>)
                            }

                            {
                                deleteUsers && <DeleteUser deleteUsers={deleteUsers} setDeleteUsers={setDeleteUsers}></DeleteUser>
                            }

                        </tbody>
                    </table>
                </div>



*/


