import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../top-trending/royal-auto-parts.png';
import './Navbar.css'
import defaultImage from '../../../background-image/default-image.png'

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login');
        localStorage.removeItem('accessToken')
    }
    return (
        <div className=' mx-auto'>

            <div style={{ zIndex: '10' }} className="navbar rounded p-0 fixed backgroundHover">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li className='hover:text-red-700'><Link to='/availablePurchase'>Available Parts</Link></li>
                            <li className='hover:text-red-700'><Link to='/viewReviews'>All Reviews</Link></li>
                            {/* <li><Link to='/blog'>Blogs</Link></li> */}
                            <li><Link to='/myPortfolio'>My Portfolio</Link></li>



                            {
                                user && <li ><Link to='/dashboard'>Dashboard</Link></li>
                            }

                            {
                                user ? <li onClick={handleSignOut}> <p>Log Out</p></li> : <li><Link to='/login'>Login</Link></li>
                            }

                            {
                                user && <li><p>{user.displayName}</p></li>
                            }


                        </ul>
                    </div>
                    <Link to='/home'>
                        <span className='img-control'>
                            <img className='spin_container' style={{ width: '45px', display: 'inline', marginLeft: '20px' }} src={logo} alt="" />
                        </span>
                        <a className="btn btn-ghost normal-case text-xl text-white  theText ">Royal Auto Parts</a>
                    </Link>
                </div>
                <div style={{ width: '800px' }} className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal p-0 text-white  ">

                        <li className='hover:text-red-700'><Link to='/availablePurchase'>Available Parts</Link></li>
                        <li className='hover:text-red-700'><Link to='/viewReviews'>All Reviews</Link></li>
                        {/* <li className='hover:text-red-700'><Link to='/myPortfolio'>My Portfolio</Link></li> */}
                        {/* <li className='hover:text-red-700'><Link to='/blog'>Blogs</Link></li> */}

                        {
                            user && <li className='hover:text-red-700'><Link to='/dashboard'>Dashboard</Link></li>
                        }

                        {
                            user ? <li className='hover:text-red-700' onClick={handleSignOut}> <p>Log Out</p></li> : <li className='hover:text-red-700'><Link to='/login'>Login</Link></li>
                        }

                        {
                            user && <div> {user.photoURL !== null ? <img style={{ width: '30px', borderRadius: '50px', marginRight: '20px', marginTop: '7px', marginLeft: '20px' }} src={user?.photoURL} alt="" /> : <img style={{ width: '30px', borderRadius: '50px', marginRight: '20px', marginTop: '7px', marginLeft: '20px' }} src={defaultImage} alt="" />} </div>
                        }


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;