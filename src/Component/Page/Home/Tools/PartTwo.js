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

                    <div data-aos='fade-up' data-aos-duration='1200' >
                        <p>{name} </p>
                    </div>
                    <br />
                    <div data-aos='fade-up' data-aos-duration='1400'>
                        <p>{description}</p>
                    </div>
                    <br />
                    <div data-aos='fade-up' data-aos-duration='1600'>
                        <p>Minimum Order: {minOrderQuantity} </p>
                        <p>Available: {availableQuantity} </p>
                        <p>Price: {pricePerUnit} </p>
                    </div>
                    <br />
                    <div data-aos='fade-left' data-aos-duration='1700'>
                        <button onClick={() => handlePurchase(_id)} className="theButton ">Purchase</button>
                    </div>
                </div>

                <div data-aos='zoom-in' data-aos-duration='1000' className='image-part'>
                    <img src={img} />
                </div>
            </div>

            {/* <div>
                <div data-aos='zoom-in' data-aos-duration='1000'>
                    < img style={{ width: '350px', borderRadius: '10px', margin: 'auto' }} src={img} />
                </div>
                <br /><br />
                <div style={{ width: '85%', margin: 'auto', color: 'white' }}>
                    <div>
                        <p data-aos='fade-up' data-aos-duration='1200' className='text-left'>{name} </p>
                    </div>
                    <br />
                    <div data-aos='fade-up' data-aos-duration='1400'>
                        <p className='text-left'>{description} </p>
                    </div>
                    <br />
                    <div data-aos='fade-up' data-aos-duration='1600' className='text-left'>
                        <p>Minimum Order: {minOrderQuantity} </p>
                        <p>Available: {availableQuantity} </p>
                        <p>Price: {pricePerUnit} </p>
                    </div>
                    <br />
                    <div>
                        <div style={{ textAlign: 'left' }} data-aos='fade-left' data-aos-duration='1700' >
                            <button onClick={() => handlePurchase(_id)} className="theButton ">Purchase</button>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default PartTwo;