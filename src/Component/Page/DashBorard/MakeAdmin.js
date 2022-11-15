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


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>

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