import React from 'react';
import customer from '../../../../Business-reviews/people.png'
import reveneue from '../../../../Business-reviews/annual-reveneue.png'
import reviews from '../../../../Business-reviews/customer-review.png'
import employees from '../../../../Business-reviews/employees.png'
import parts from '../../../../Business-reviews/car-parts.png'
import background from '../../../../Business-reviews/background.jpg'
const BusinessSummery = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <br /><br />
            <h2 className='text-4xl font-bold text-left uppercase'>Business Summery</h2>
            <br />
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <div className='lg:grid grid-cols-5 sm:grid-cols'>

                    <div >
                        <img style={{ width: '120px' }} className='m-16' src={customer} alt="" />

                        <p className='text-3xl  font-bold text-blue-600'> 100+ Customers </p>
                    </div>
                    <div >

                        <img style={{ width: '120px' }} className='m-16' src={reveneue} alt="" />

                        <p className='text-3xl  font-bold text-blue-600'><p> 120M+</p>Reveneue</p>
                    </div>
                    <div >

                        <img style={{ width: '120px' }} className='m-16' src={reviews} alt="" />

                        <p className='text-3xl  font-bold text-blue-600'> <p>33K</p>  Reviews </p>
                    </div>
                    <div >

                        <img style={{ width: '120px' }} className='m-16' src={employees} alt="" />

                        <p className='text-3xl  font-bold text-blue-600' >700+ Employees</p>
                    </div>
                    <div>

                        <img style={{ width: '120px' }} className='m-16' src={parts} alt="" />
                        <p className='text-3xl  font-bold text-blue-600' ><p>60+</p>Car Parts</p>
                    </div>
                </div>
                <br /><br />
                <div className='flex justify-between w-2/3 mx-auto bg-white p-10 drop-shadow-xl rounded-lg'>
                    <div className='text-left'>
                        <p className='text-2xl font-bold text-blue-300'>Dont feel hesitate to ask your Desired Question</p>

                    </div>

                    <div>
                        <button className='btn btn-primary text-white font-bold'>Contact us</button>
                    </div>

                </div>
                <br /><br /><br />
            </div>
        </div>
    );
};

export default BusinessSummery;