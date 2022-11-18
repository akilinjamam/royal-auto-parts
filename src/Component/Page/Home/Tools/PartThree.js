import React from 'react';

const PartThree = ({ part }) => {

    const { _id, img, name, description, minOrderQuantity, availableQuantity, pricePerUnit
    } = part
    return (
        <div className='background-modification-two '>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='flex w-5/6 mx-auto justify-between  items-center'  >
                <div data-aos='zoom-in' data-aos-duration='1000' className='image-part'>
                    <img src={img} />
                </div>

                <div className='detail-part'>
                    <div data-aos='fade-up' data-aos-duration='1200'>
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
                </div>
            </div>

        </div>

    );
};

export default PartThree;