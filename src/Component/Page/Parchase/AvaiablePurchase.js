import React, { useEffect, useState } from 'react';
import './AvailablePurchase.css'
import Loading from '../../Shared/Navbar/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import './parchase.css'

const AvaiablePurchase = () => {

    const [parts, setParts] = useState([])

    const navigate = useNavigate()





    console.log(parts)
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

    if (!parts) {
        return <Loading></Loading>

    }

    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`)
    }



    return (
        <div style={{/*  width: '85%', minHeight: '100vh' */ }} className=' pt-24  mx-auto  resAvailableMain' >

            <div data-aos='fade-up' data-aos-duration='1000'>
                <p className='color text-4xl text-left ml-9 font-bold mb-12 theFonts '>All Available Products</p>
            </div>

            {
                parts?.map(p => <div parts={p} key={p._id} className='p-10'>

                    <div data-aos='flip-up' data-aos-duration='700' className='flex justify-between  border p-5 mb-10 border-red-600 rounded resAvailableparts '>

                        <div data-aos='zoom-in' data-aos-duration='1000' >
                            <img style={{ width: '290px', borderRadius: '10px' }} src={p.img} alt="" className='resAvailableImg' />
                        </div>

                        <div data-aos='fade-left' data-aos-duration='1500' style={{ width: '600px', textAlign: 'left', color: 'gray' }}>
                            <p>{p.name}</p>
                            <br />
                            <p>{p.description}</p>
                            <br />
                            <p>Minimum Order: {p.minOrderQuantity}</p>

                            <p> Price: {p.pricePerUnit}</p>
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