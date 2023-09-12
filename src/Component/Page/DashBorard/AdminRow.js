import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, index, refetch }) => {

    const makeAdmin = (email, refetch) => {

        fetch(`https://royal-autoparts-re-server.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')} `
            },
        })
            .then(res => {

                if (res.status === 403) {
                    toast.error('Failed to make an Admin. You must have to be an Admin');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    toast.success('successfully made an Admin');
                    refetch();
                }
            })
    }


    const alreadyAdmin = () => {

        toast.error('already rolling as admin')
    }


    return (
        <tr class="active">
            <th className='border-b-2 border-red-600 pb-3 pt-3'>{index + 1}</th>
            <td className='border-b-2 border-red-600 pb-3 pt-3'> {user.email} </td>
            <td className='border-b-2 border-red-600 pb-3 pt-3'> {user.role !== 'admin' ? <button onClick={() => makeAdmin(user.email, refetch)} className='btn btn-xs'> Make Admin </button> : <p onClick={alreadyAdmin} className='btn bg-red-500 border-0 btn-xs'> rolling as Admin </p>} </td>

        </tr>
    );
};

export default AdminRow;