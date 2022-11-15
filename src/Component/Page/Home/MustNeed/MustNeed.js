import React from 'react';
import brake from '../../../../Must Need/break-pad.png'
import oil from '../../../../Must Need/oil-filter.png'
import air from '../../../../Must Need/air filter.png'
import transmision from '../../../../Must Need/transmission-fluid.png'
import coolent from '../../../../Must Need/coolent.png'

const MustNeed = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <br /><br />
            <h2 className='text-4xl font-bold text-left' >MUST NEED FOR EVERY CAR</h2>
            <br /><br />
            <p className='text-gray-400 text-xl'>Enjoy an Entirely new level of Driveing experience with our in-depth selection of superior car bulbs, brake-pades, spark-plugs and other automative parts and accessories designed to keep your car running at its absolute best</p>
            <br /><br />
            <div className='grid lg:grid-cols-5'>
                <img className=' pt-4 cursor-pointer' src={brake} alt="" />
                <img className='cursor-pointer' src={oil} alt="" />
                <img className='cursor-pointer' src={air} alt="" />
                <img className='cursor-pointer' src={transmision} alt="" />
                <img className='cursor-pointer' src={coolent} alt="" />
            </div>
            <br /><br /><br />
        </div>
    );
};

export default MustNeed;