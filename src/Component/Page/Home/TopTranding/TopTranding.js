import React from 'react';
import enginOil from '../../../../top-trending/engine-oil.png'
import spark from '../../../../top-trending/spurk-plug.png'
import battery from '../../../../top-trending/battery-and-tires.png'
import care from '../../../../top-trending/car-care-products.png'
import bulb from '../../../../top-trending/car-bulb.png'
import suspension from '../../../../top-trending/car-care-products.png'

const TopTranding = () => {
    return (
        <div className='mx-auto w-5/6'>
            <h2 className='text-left text-4xl font-bold'>TOP TRANDINGS</h2>
            <br />
            <div className='grid lg:grid-cols-3 gap-4'>
                <div className='flex border border-gray-200 p-2 '>
                    <div className='text-left w-2/3 relative '>
                        <h2 className='text-3xl font-bold'>Engine Oiles</h2>
                        <br />
                        <button style={{ postition: 'sticky', bottom: '0' }} className='btn btn-primary  text-white bottom-0'>Shop Now</button>
                    </div>
                    <img className='w-1/3' src={enginOil} alt="" />
                </div>
                <div className='flex border border-gray-200 p-2 '>
                    <div className='text-left w-2/3'>
                        <h2 className='text-3xl font-bold'>Spark Plug</h2>
                        <br />
                        <button className='btn btn-primary text-white'>Shop Now</button>
                    </div>
                    <img className='w-1/3' src={spark} alt="" />
                </div>
                <div className='flex border border-gray-200 p-2 '>
                    <div className='text-left w-2/3'>
                        <h2 className='text-3xl font-bold'>Battery & Tires</h2>
                        <br />
                        <button className='btn btn-primary text-white'>Shop Now</button>
                    </div>
                    <img className='w-1/3' src={battery} alt="" />
                </div>
                <div className='flex border border-gray-200 p-2 '>
                    <div className='text-left w-2/3'>
                        <h2 className='text-3xl font-bold'>Caring Products</h2>
                        <br />
                        <button className='btn btn-primary text-white'>Shop Now</button>
                    </div>
                    <img className='w-1/3' src={care} alt="" />
                </div>
                <div className='flex border border-gray-200 p-2 '>
                    <div className='text-left w-2/3'>
                        <h2 className='text-3xl font-bold'>Car Bulb</h2>
                        <br />
                        <button className='btn btn-primary text-white'>Shop Now</button>
                    </div>
                    <img className='w-1/3' src={bulb} alt="" />
                </div>
                <div className='flex border border-gray-200 p-2 '>
                    <div className='text-left w-2/3'>
                        <h2 className='text-3xl font-bold'>Suspension</h2>
                        <br />
                        <button className='btn btn-primary text-white'>Shop Now</button>
                    </div>
                    <img className='w-1/3' src={suspension} alt="" />
                </div>
            </div>

        </div>
    );
};

export default TopTranding;