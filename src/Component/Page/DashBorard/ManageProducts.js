import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {

    const [parts, setParts] = useState([])

    useEffect(() => {
        const url = 'https://ancient-crag-35082.herokuapp.com/parts';
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

            <br />
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>available quantity</th>
                            <th>price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            parts.map((p, index) => <tr key={p._id} class="active">
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.minOrderQuantity}</td>
                                <td>{p.availableQuantity}</td>
                                <td>{p.pricePerUnit}</td>
                                <td> <Link to={`/dashboard/updateProduct/${p._id}`}> <button className='btn btn-xs'>Update</button></Link> </td>
                                <td> <button className='btn btn-xs'> Delete </button> </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;