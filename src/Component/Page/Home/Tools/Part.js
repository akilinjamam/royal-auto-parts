import React from 'react';

import { useNavigate } from 'react-router-dom';
import './part.css'


const Part = ({ part }) => {

    const navigate = useNavigate()
    const { _id, img, name, description, minOrderQuantity, availableQuantity, pricePerUnit
    } = part


    const handlePurchase = (id) => {

        navigate(`/purchase/${id}`)

    }



    return (

        <div style={{ height: '100vh' }} className='flex justify-center items-center'>

            <div className='flex w-5/6 mx-auto justify-between resParts  items-center'  >
                <div className='image-part resPartsImg'>
                    <img src={img} />
                </div>

                <div className='detail-part resPartsDetails'>
                    <div  >
                        <p>{name} </p>
                    </div>
                    <br />
                    <div  >
                        <p>{description}</p>
                    </div>
                    <br />
                    <div  >
                        <p>Minimum Order: {minOrderQuantity} </p>
                        <p>Available: {availableQuantity} </p>
                        <p>Price: {pricePerUnit} </p>
                    </div>
                    <br />
                    <div   >
                        <button onClick={() => handlePurchase(_id)} className="theButton ">Purchase</button>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Part;




