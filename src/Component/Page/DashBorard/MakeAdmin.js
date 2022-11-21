import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Navbar/Loading/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: user, isLoading, refetch } = useQuery('user', () => fetch('https://ancient-crag-35082.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')} `

        }
    }).then(res => res.json()))


    if (isLoading) {

        return <Loading></Loading>
    }





    return (
        <div>

            <p className='color text-2xl font-bold text-left theFonts'>Make Admin</p>
            <br />
            <div class="overflow-x-auto">
                <table class="text-left text-white w-5/6">

                    <thead>
                        <tr>
                            <th className='color'>SL</th>
                            <th className='color'>Name</th>
                            <th className='color'>Make Admin</th>

                        </tr>
                    </thead>
                    <tbody>



                        {
                            user?.map((u, index) => <AdminRow refetch={refetch} index={index} user={u} key={u._id}></AdminRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;