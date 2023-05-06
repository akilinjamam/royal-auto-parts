import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Shared/useAdmin';
import './Dashboard.css'

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    console.log(admin)
    return (
        <div style={{ minHeight: '100vh' }} >
            <br /><br /><br />

            {/* for responsiveness */}


            <div className='flex justify-between '>

                <div data-aos='fade-right' data-aos-duration='800' style={{ width: '260px', height: '480px', borderRight: '1px solid red', borderTop: '1px solid red', borderBottom: '1px solid red', marginTop: '50px', borderRadius: '0px 10px 10px 0px' }} className='dashboardBar' >

                    <div className='ml-5 mt-16 '>
                        {user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600 ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard' >My Order</Link></div>}
                        {
                            user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/addReview' >Add Review</Link></div>
                        }

                        {user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/myProfile' >Add My Profile</Link></div>}

                        {
                            user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/seeProfile' >See My Profile</Link></div>
                        }

                        {/* {admin && <div></div>} */}

                        {admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/manageOrder' >Manage All Orders</Link></div>}

                        {admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/manageProduct' >Manage All Products</Link></div>}

                        {
                            admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/addProduct' >Add Product</Link></div>
                        }
                        {
                            admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px', textAlign: 'left' }}><Link to='/dashboard/makeAdmin' >Make Admin</Link></div>

                        }
                    </div>
                </div>



                <div>
                    <br />
                    <h2 className='text-4xl font-bold text-blue-600  '>Dashboard</h2>
                    <br /> <br />

                    <div className='flex justify-between  text-center resDeshboardBar'>

                        {user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600 ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard' >My Order</Link></div>}
                        {
                            user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/addReview' >Add Review</Link></div>
                        }

                        {user && !admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/myProfile' >Add Profile</Link></div>}

                        {
                            user && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/seeProfile' >See Profile</Link></div>
                        }

                        {/* {admin && <div></div>} */}

                        {admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/manageOrder' >Mng Orders</Link></div>}

                        {admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/manageProduct' >Mng Products</Link></div>}

                        {
                            admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/addProduct' >Add Product</Link></div>
                        }
                        {
                            admin && <div className=' p-3 hover:border-l-2 hover:border-red-600  ' style={{ color: 'red', marginBottom: '15px' }}><Link to='/dashboard/makeAdmin' >Make Admin</Link></div>

                        }

                    </div>
                    <br />
                    <div className=' resDashboard' >
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <br />

        </div>
    );
};

export default DashBoard;