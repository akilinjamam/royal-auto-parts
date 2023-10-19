import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartTwo = ({ part }) => {
    const { _id, img, name, description, minOrderQuantity, availableQuantity, pricePerUnit
    } = part

    const navigate = useNavigate()

    const handlePurchase = (id) => {

        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div style={{ height: '110vh' }} className='flex w-5/6 mx-auto mt-16 justify-between resPartTwo items-center'  >

                <div className='detail-part'>

                    <div >
                        <p>{name} </p>
                    </div>
                    <br />
                    <div>
                        <p>{description}</p>
                    </div>
                    <br />
                    <div>
                        <p>Minimum Order: {minOrderQuantity} </p>
                        <p>Available: {availableQuantity} </p>
                        <p>Price: {pricePerUnit} </p>
                    </div>
                    <br />
                    <div>
                        <button onClick={() => handlePurchase(_id)} className="theButton ">Purchase</button>
                    </div>
                </div>

                <div className='image-part'>
                    <img src={img} />
                </div>
            </div>
        </div>
    );
};

export default PartTwo;