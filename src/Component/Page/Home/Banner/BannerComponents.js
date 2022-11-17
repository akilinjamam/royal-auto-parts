import React from 'react';
import background from '../../../../background-image/banner-vactor-img-1.png'
import './BannerComponents.css'
const BannerComponents = () => {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <div style={{
                height: '600px', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between'
            }} >
                <div style={{ widht: '400px' }}>
                    <img style={{ width: '500px' }} src={background} alt="" />
                </div>

                <div className=' mb-10' style={{ width: '450px', textAlign: 'left' }}>
                    <p className='theFonts color size'>Royal Auto Parts</p>

                    <p className='text-gray-400 theFonts'>We are ready to provide you the best automotive parts for your vehical with Gurantee.<br /> No excuse just Move on.... </p>
                    <br />
                    <button className='theButton'>View All Available Parts</button>
                </div>
            </div>
        </div>
    );
};

export default BannerComponents; 