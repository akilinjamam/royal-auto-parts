import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Shared/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    console.log(admin)
    return (
        <div>
            <br /><br /><br />
            <div class="navbar bg-neutral text-neutral-content lg:w-3/3 mx-auto justify-evenly rounded-lg">
                {user && !admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard' >My Order</Link></li>}
                {
                    user && !admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/addReview' >Add Review</Link></li>
                }

                {user && !admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/myProfile' >Add My Profile</Link></li>}

                {
                    user && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/seeProfile' >See My Profile</Link></li>
                }

                {admin && <div></div>}

                {admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/manageOrder' >Manage All Orders</Link></li>}

                {admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/manageProduct' >Manage All Products</Link></li>}

                {
                    admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/addProduct' >Add Product</Link></li>
                }
                {
                    admin && <li className='mr-5 btn btn-neutral '><Link to='/dashboard/makeAdmin' >Make Admin</Link></li>

                }
            </div>
            <br />
            <h2 className='text-4xl font-bold text-blue-600'>Dashboard</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;