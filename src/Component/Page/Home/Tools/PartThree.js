import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PartThree = ({ part }) => {

    const navigate = useNavigate()

    const handlePurchase = (id) => {

        navigate(`/purchase/${id}`)
    }

    const { _id, img, name, description, minOrderQuantity, availableQuantity, pricePerUnit
    } = part
    return (
        <div style={{ height: '140vh' }} className='background-modification-two flex justify-center items-center resPartTreeMain '>

            <div className='flex w-5/6 mx-auto justify-between items-center resPartThree'   >
                <div className='image-part'>
                    <img src={img} />
                </div>

                <div className='detail-part resDetailThree '>
                    <div className='resPartDetailTitle'>
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

                    <div className='flex items-center justify-between'>
                        <div>
                            <button onClick={() => handlePurchase(_id)} className="theButton ">Purchase</button>

                        </div>

                        <div>
                            <button className='theButton '> <Link to='/availablePurchase'>View All Parts</Link> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PartThree;