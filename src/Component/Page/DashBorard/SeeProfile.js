import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Navbar/Loading/Loading';
import DeleteUser from './DeleteUser';

const SeeProfile = () => {

    const navigate = useNavigate()

    const { data: profile, isLoading } = useQuery('profile', () => fetch('https://ancient-crag-35082.herokuapp.com/profile', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // const navigateUpdate = (id) => {

    //     navigate(`/dashboard/updateProfile/${id}`)
    // }


    return (
        <div>

            <div >
                <br />
                {
                    profile.map((p, index) =>

                        <div className='border-b-2 border-red-600 pb-5 pt-5'>
                            <div className='flex text-left justify-between text-white'>
                                {/* div one */}
                                <div style={{ width: '' }}>
                                    <p></p>
                                    <p>Name : {p.name}</p>
                                    <p>Email : {p.email}</p>
                                    <p>Education : {p.education}</p>

                                </div>

                                {/* div two */}
                                <div style={{ width: '500px' }}>
                                    <p>Location : {p.location} </p>
                                    <p>Price Per Unit: {p.linkdin} </p>
                                    <br />
                                    <p><Link to={`/dashboard/updateProfile/${p._id}`}> <button className='btn btn-xs'>Update</button></Link></p>
                                </div>
                            </div>
                            <br />


                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default SeeProfile;



/* 

 <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>education</th>
                            <th>location</th>
                            <th>linkdin</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            profile.map((p, index) =>

                                <tr key={p._id} class="active">
                                    <th>{index + 1}</th>
                                    <td>{p.name}</td>
                                    <td> {p.email} </td>
                                    <td> {p.education} </td>
                                    <td> {p.location} </td>
                                    <td> {p.linkdin} </td>
                                    <td> <Link to={`/dashboard/updateProfile/${p._id}`}> <button className='btn btn-xs'>Update</button></Link> </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>


*/