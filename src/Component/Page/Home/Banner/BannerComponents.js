import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../../background-image/banner-vactor-img-1.png'
import './BannerComponents.css'
const BannerComponents = () => {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>

            <div>
                <div className='forResposive ' style={{
                    height: '100vh', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between'
                }} >
                    <div className='imgResponsive'>
                        <img style={{ width: '500px' }} src={background} alt="" />
                    </div>

                    <div className=' mb-10 responsiveDetail' style={{ textAlign: 'left' }}>
                        <div className='resBannerTitle'  >
                            <p className='theFonts color size responsiveTitle '>Royal Auto Parts</p>
                        </div>

                        <div  >
                            <p className='text-gray-400 theFonts'>We are ready to provide you the best automotive parts for your vehical with Gurantee.<br /> No excuse just Move on.... </p>
                        </div>
                        <br />
                        <div className='resBannerButton'>
                            <button className='theButton '><Link to='/availablePurchase'>View All Available Parts</Link></button>
                        </div>
                        <br />
                        <div  >
                            <p className='text-gray-400 theFonts'>Admin Access:</p>
                            <p className='text-gray-400 theFonts'>Email: bosor@gmail.com</p>
                            <p className='text-gray-400 theFonts'>Password: 123456</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerComponents; 