import React, { useState } from 'react';
import './BusinessSummery.css'
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
                    <br /><br />
                    <div>
                        <h2 className='text-4xl font-bold color theFonts '>Business Summery</h2>
                    </div>

                    <div className='businessSummery'>

                        <div className='lg:grid grid-cols-5  sm:grid-cols'>

                            <div >
                                <div >
                                    <img style={{ width: '50%', margin: 'auto', marginTop: '50px' }} src={customer} alt="" />
                                </div>
                                <br />
                                <div>
                                    <span className='text-2xl font-bold text-yellow-500'>{counterStart && <CountUp start={200} end={460} duration={3} delay={0} />}+ Customers</span>
                                </div>
                            </div>
                            <div >

                                <div >
                                    <img style={{ width: '50%', margin: 'auto', marginTop: '50px' }} src={reveneue} alt="" />
                                </div>
                                <br />
                                <div>
                                    <span className='text-2xl font-bold text-yellow-500'>{counterStart && <CountUp start={150} end={120} duration={3} delay={0} />}+ Reveneue</span>
                                </div>
                            </div>
                            <div >

                                <div >
                                    <img style={{ width: '50%', margin: 'auto', marginTop: '50px' }} src={reviews} alt="" />
                                </div>
                                <br />
                                <div>
                                    <span className='text-2xl font-bold text-yellow-500'>{counterStart && <CountUp start={25} end={49} duration={3} delay={0} />}K+ Reviews</span>
                                </div>
                            </div>
                            <div >

                                <div >
                                    <img style={{ width: '50%', margin: 'auto', marginTop: '50px' }} src={employees} alt="" />
                                </div>
                                <br />
                                <div>
                                    <span className='text-2xl font-bold text-yellow-500'>{counterStart && <CountUp start={100} end={220} duration={3} delay={0} />}+ Employees</span>
                                </div>
                            </div>
                            <div>
                                <div >
                                    <img style={{ width: '50%', margin: 'auto', marginTop: '50px' }} src={parts} alt="" />
                                </div>
                                <br />
                                <div>
                                    <span className='text-2xl font-bold text-yellow-500'>{counterStart && <CountUp start={20} end={80} duration={3} delay={0} />}+ Car Parts</span>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className='flex justify-between w-2/3 mx-auto border border-red-600  p-10 drop-shadow-xl rounded-lg'>
                            <div className='text-left '>
                                <p className='text-xl  text-blue-300'>Dont feel hesitate to ask your Desired Question</p>

                            </div>

                            <div>
                                <button className='btn btn-primary text-white font-bold'>Contact us</button>
                            </div>

                        </div>
                        <br /><br /><br />
                    </div>


                    {/* for responsiveness */}
                    <div className='businessSummeryRes'>
                        <div>
                            <br /><br />
                            <div >
                                <img style={{ width: '100px', margin: 'auto' }} className='m-16' src={customer} alt="" />
                                <br />
                                <p className='text-3xl  font-bold text-yellow-500'> <span> {counterStart && <CountUp start={200} end={460} duration={3} delay={0} />}+</span></p>
                                <p className='text-3xl  font-bold text-yellow-500'>Customers</p>
                            </div>
                            <br />
                            <div >

                                <img style={{ width: '100px', margin: 'auto' }} className='m-16' src={reveneue} alt="" />
                                <br />
                                <p className='text-3xl  font-bold text-yellow-500'>
                                    {counterStart && <CountUp start={150} end={120} duration={3} delay={0} />}
                                    M+</p>
                                <p className='text-3xl  font-bold text-yellow-500' >Reveneue</p>
                            </div>
                            <br /><br />
                            <div >

                                <img style={{ width: '100px', margin: 'auto' }} className='m-16' src={reviews} alt="" />
                                <br />
                                <p className='text-3xl  font-bold text-yellow-500'>  {counterStart && <CountUp start={25} end={49} duration={3} delay={0} />}+</p>
                                <p className='text-3xl  font-bold text-yellow-500'>Reviews</p>
                            </div>
                            <br /><br />
                            <div >

                                <img style={{ width: '100px', margin: 'auto' }} className='m-16' src={employees} alt="" />
                                <br />
                                <p className='text-3xl  font-bold text-yellow-500' >{counterStart && <CountUp start={100} end={220} duration={3} delay={0} />}+ </p>
                                <p className='text-3xl  font-bold text-yellow-500'>Employees</p>
                            </div>
                            <br /><br />
                            <div>

                                <img style={{ width: '100px', margin: 'auto' }} className='m-16' src={parts} alt="" />
                                <br />
                                <p className='text-3xl  font-bold text-yellow-500' >  {counterStart && <CountUp start={20} end={80} duration={3} delay={0} />}+</p>
                                <p className='text-3xl  font-bold text-yellow-500'>Car Parts</p>
                            </div>
                            <br /><br />
                        </div>


                        <div className=' border border-red-600  p-10  rounded-lg questionPart '>
                            <div className=''>
                                <p className='text-xl  text-blue-300'>Dont feel hesitate to ask your Desired Question</p>

                            </div>
                            <br />
                            <div>
                                <button className='btn btn-primary text-white font-bold'>Contact us</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </ScrollTrigger>
    );
};

export default BusinessSummery;