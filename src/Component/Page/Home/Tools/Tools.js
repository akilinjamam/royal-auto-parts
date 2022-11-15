import React, { useEffect, useState } from 'react';
import Part from './Part';

const Tools = () => {

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
            <div className='lg:w-5/6 mx-auto'>
                <h2 className='text-4xl font-bold text-left uppercase'> All Parts </h2>
            </div>
            <br />
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:w-5/6 sm:w-full mx-auto gap-10'>


                {
                    parts.map(p => <Part part={p} key={p._id} ></Part>)
                }
            </div>

        </div>
    );
};

export default Tools;