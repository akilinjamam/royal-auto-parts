import React, { useState } from 'react';
import customer from '../../../../Business-reviews/people.png'
import reveneue from '../../../../Business-reviews/annual-reveneue.png'
import reviews from '../../../../Business-reviews/customer-review.png'
import employees from '../../../../Business-reviews/employees.png'
import parts from '../../../../Business-reviews/car-parts.png'
import background from '../../../../Business-reviews/background.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const BusinessSummery = () => {

    const [counterStart, setCounterStart] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)} >
            <div className='background-modification-three'>
                <div className='w-5/6 mx-auto '>
                    <br />
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        <h2 className='text-4xl font-bold color theFonts '>Business Summery</h2>
                    </div>

                    <div style={{}}>

                        <div className='lg:grid grid-cols-5 sm:grid-cols'>

                            <div data-aos='zoom-in' data-aos-duration='1000' >
                                <img style={{ width: '100px' }} className='m-16' src={customer} alt="" />

                                <p className='text-3xl  font-bold text-yellow-500'> <span> {counterStart && <CountUp start={200} end={460} duration={3} delay={0} />}</span>+ Customers </p>
                            </div>
                            <div data-aos='zoom-in' data-aos-duration='1500' >

                                <img style={{ width: '100px' }} className='m-16' src={reveneue} alt="" />

                                <p className='text-3xl  font-bold text-yellow-500'><p> <span> {counterStart && <CountUp start={150} end={120} duration={3} delay={0} />}</span>M+</p>Reveneue</p>
                            </div>
                            <div data-aos='zoom-in' data-aos-duration='1200' >

                                <img style={{ width: '100px' }} className='m-16' src={reviews} alt="" />

                                <p className='text-3xl  font-bold text-yellow-500'> <p><span> {counterStart && <CountUp start={25} end={49} duration={3} delay={0} />}</span>K</p>  Reviews </p>
                            </div>
                            <div data-aos='zoom-in' data-aos-duration='2500' >

                                <img style={{ width: '100px' }} className='m-16' src={employees} alt="" />

                                <p className='text-3xl  font-bold text-yellow-500' ><span> {counterStart && <CountUp start={100} end={220} duration={3} delay={0} />}</span>+  Employees</p>
                            </div>
                            <div data-aos='zoom-in' data-aos-duration='3000'>

                                <img style={{ width: '100px' }} className='m-16' src={parts} alt="" />
                                <p className='text-3xl  font-bold text-yellow-500' ><p> <span> {counterStart && <CountUp start={20} end={80} duration={3} delay={0} />}</span>+</p>Car Parts</p>
                            </div>
                        </div>
                        <br /><br />
                        <div data-aos='flip-up' data-aos-duration='500' className='flex justify-between w-2/3 mx-auto border border-red-600  p-10 drop-shadow-xl rounded-lg'>
                            <div data-aos='fade-up' data-aos-duration='1000' className='text-left '>
                                <p className='text-xl  text-blue-300'>Dont feel hesitate to ask your Desired Question</p>

                            </div>

                            <div data-aos='zoom-in' data-aos-duration='1500'>
                                <button className='btn btn-primary text-white font-bold'>Contact us</button>
                            </div>

                        </div>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default BusinessSummery;