import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Navbar/Loading/Loading';
import DeleteUser from './DeleteUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SeeProfile = () => {

    const navigate = useNavigate()

    const [user] = useAuthState(auth)

    const { data: profile, isLoading } = useQuery('profile', () => fetch('https://royal-autoparts-re-server.onrender.com/profile', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(profile);

    const findMyProfile = profile?.find(p => {
        return p.email === user?.email
    })

    console.log(findMyProfile);

    return (
        <div>

            <div >


                <div className='border-b-2 border-red-600 pb-5 pt-5 mr-10'>
                    {
                        findMyProfile ?
                            <div className='flex text-left justify-between text-white'>
                                {/* div one */}
                                <div style={{ width: '' }}>
                                    <p></p>
                                    <p>Name : {findMyProfile.name}</p>
                                    <p>Email : {findMyProfile.email}</p>
                                    <p>Education : {findMyProfile.education}</p>
                                    <br />
                                    <p><Link to={`/dashboard/updateProfile/${findMyProfile._id}`}>
                                        <button className='btn btn-xs'>Update</button></Link></p>

                                </div>

                                {/* div two */}
                                <div style={{ width: '500px' }}>
                                    <p>Location : {findMyProfile.location} </p>
                                    <p>Linkdin Id: {findMyProfile.linkdin} </p>
                                </div>
                            </div>
                            :
                            <p className='text-white'>You Have not added any profile yet...</p>
                    }
                    <br />


                </div>

            </div>
        </div>
    );
};

export default SeeProfile;
