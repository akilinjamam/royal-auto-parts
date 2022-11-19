import React, { useEffect, useState } from 'react';
import './AvailablePurchase.css'
import Loading from '../../Shared/Navbar/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const AvaiablePurchase = () => {

    const [parts, setParts] = useState([])

    const navigate = useNavigate()





    console.log(parts)
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

    if (!parts) {
        return <Loading></Loading>

    }

    const handlePurchase = (id) => {

        navigate(`/purchase/${id}`)
    }



    return (
        <div style={{ width: '94%', minHeight: '100vh' }} className=' pt-24  mx-auto' >

            <div>
                <p className='color text-4xl text-left ml-9 font-bold mb-12 theFonts '>All Available Products</p>
            </div>

            {
                parts?.map(p => <div parts={p} key={p._id} className='p-10'>

                    <div data-aos='flip-up' data-aos-duration='700' className='flex justify-between  border p-5 mb-10 border-red-600 rounded'>

                        <div data-aos='zoom-in' data-aos-duration='1000' >
                            <img style={{ width: '300px', borderRadius: '10px' }} src={p.img} alt="" />
                        </div>

                        <div data-aos='fade-left' data-aos-duration='1500' style={{ width: '680px', textAlign: 'left', color: 'gray' }}>
                            <p>{p.name}</p>
                            <br />
                            <p>{p.description}</p>
                            <br />
                            <p>{p.minOrderQuantity}</p>
                            <br />
                            <p>{p.pricePerUnit}</p>
                            <br />
                            <button onClick={() => handlePurchase(p._id)} className='theButton'>Purchase</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AvaiablePurchase;