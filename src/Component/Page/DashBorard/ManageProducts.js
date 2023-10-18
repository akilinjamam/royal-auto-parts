import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        const url = 'https://royal-autoparts-re-server.onrender.com/parts';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div>
            <p className='text-left color font-bold text-2xl theFonts' >Manage All Products</p>
            <br />
            <div class="overflow-x-auto">
                <table class=" w-5/6 text-left text-white">

                    <thead>
                        <tr>
                            <th className='color'>SL</th>
                            <th className='color'>Name</th>
                            <th className='color'>quantity</th>
                            <th className='color'>available quantity</th>
                            <th className='color'>price</th>
                            <th className='color'></th>
                            <th className='color'></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            parts.map((p, index) => <tr key={p._id} class="active">
                                <th className='border-b-2 border-red-600 pb-3 pt-3'>{index + 1}</th>
                                <td className='border-b-2 border-red-600 pb-3 pt-3'>{p.name}</td>
                                <td className='border-b-2 border-red-600 pb-3 pt-3'>{p.minOrderQuantity}</td>
                                <td className='border-b-2 border-red-600 pb-3 pt-3'>{p.availableQuantity}</td>
                                <td className='border-b-2 border-red-600 pb-3 pt-3'>{p.pricePerUnit}</td>
                                <td className='border-b-2 border-red-600 pb-3 pt-3'> <Link to={`/dashboard/updateProduct/${p._id}`}> <button className='btn btn-xs'>Update</button></Link> </td>
                                <td className='border-b-2 border-red-600 pb-3 pt-3'> <button className='btn btn-xs'> Delete </button> </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;