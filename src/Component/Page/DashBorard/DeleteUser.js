import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({ deleteUsers, setDeleteUsers, refetch }) => {

    const { partsName, userEmail, _id } = deleteUsers


    console.log(deleteUsers)
    // console.log(allOrders)
    const handleDelete = (partsName, id) => {

        fetch(`https://ancient-crag-35082.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`your order: ${partsName} is deleted successfully and please reload page `);
                    setDeleteUsers(null)
                    // refetch();
                }
            })

    }
    return (
        <div>





            <input type="checkbox" id="delete-user" class="modal-toggle" />
            <div class="modal">
                <div style={{ background: 'red' }} class="modal-box ">
                    <label for="delete-user" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-black">Are you sure You Want to Delete: {partsName} </h3>

                    <div class="modal-action">
                        <label onClick={() => handleDelete(partsName, _id)} for="delete-user" class="btn">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteUser;