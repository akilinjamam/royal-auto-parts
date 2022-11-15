import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import DeleteUser from './DeleteUser';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [deleteUsers, setDeleteUsers] = useState(null)
    const navigate = useNavigate()
    const [myOrders, setMyOrders] = useState([])




    useEffect(() => {
        if (user) {
            const email = user?.email
            fetch(`https://ancient-crag-35082.herokuapp.com/orders?userEmail=${email}`, {
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
    }, [user])



    return (


        <div>
            <br />
            <div>

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

            </div>
        </div>
    );
};

export default MyOrder;


/* 

  useEffect(() => {
        if (user) {
            const email = user?.email
            fetch(`https://ancient-crag-35082.herokuapp.com/orders?userEmail=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setMyOrders(data)
                })
        }
    }, [user])



     const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://ancient-crag-35082.herokuapp.com/orders?userEmail=${email}`, {
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


