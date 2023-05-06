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
                    <div data-aos='zoom-in' data-aos-duration='1500' className='imgResponsive'>
                        <img style={{ width: '500px' }} src={background} alt="" />
                    </div>

                    <div className=' mb-10 responsiveDetail' style={{ textAlign: 'left' }}>
                        <div className='resBannerTitle' data-aos='fade-right ' data-aos-duration='1500'>
                            <p className='theFonts color size responsiveTitle '>Royal Auto Parts</p>
                        </div>

                        <div data-aos='fade-right' data-aos-duration='2000'>
                            <p className='text-gray-400 theFonts'>We are ready to provide you the best automotive parts for your vehical with Gurantee.<br /> No excuse just Move on.... </p>
                        </div>
                        <br />
                        <div data-aos='fade-right' data-aos-duration='3000' className='resBannerButton'>
                            <button className='theButton '><Link to='/availablePurchase'>View All Available Parts</Link></button>
                        </div>
                        <br />
                        <div data-aos='fade-right' data-aos-duration='2000'>
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