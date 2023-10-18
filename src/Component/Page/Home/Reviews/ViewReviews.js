import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Navbar/Loading/Loading';
import './ViewReviews.css'
import noReviews from '../../../../top-trending/NO-REVIEWS.png'
import defultImage from '../../../../background-image/default-image.png'
import stars from '../../../../background-image/star.png'

const ViewReviews = () => {

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://royal-autoparts-re-server.onrender.com/reviews', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    const starOne = <div>
        <img style={{ width: '15px' }} src={stars} alt="" />
    </div>

    const starTwo = <div className='flex'>
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
    </div>

    const starThree = <div className='flex'>
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
    </div>

    const starFour = <div className='flex'>
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
    </div>

    const starFive = <div className='flex'>
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
        <img style={{ width: '15px' }} src={stars} alt="" />
    </div>

    return (
        <div>
            <div className=' mx-auto w-4/6'>
                <br /><br /><br /><br />
                <h2 data-aos='fade-up' data-aos-duration='1000' className='text-4xl font-bold color theFonts text-left'>All Reviews</h2>
                <br /><br />
                <div >
                    {/* className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10' */}
                    {
                        reviews.map(review => <div key={review._id} data-aos='flip-up' data-aos-duration='600' className='m-16 border border-red-700 rounded-lg p-3  mx-auto flex items-center' >
                            {/* style={{ width: '90px' }} */}
                            {/*  */}
                            <div data-aos='zoom-in' data-aos-duration='1000' >
                                <img style={{ borderRadius: '50px', border: '3px solid purple' }} src={review.img === null ? defultImage : review.img} alt="Shoes" />
                            </div>

                            <div className='text-left ml-7 text-gray-300'>
                                <div data-aos='fade-left' data-aos-duration='1200'>
                                    <p>{review.name}</p>
                                </div>
                                <div data-aos='fade-left' data-aos-duration='1400'>
                                    <p>{review.description}</p>
                                </div>
                                <div data-aos='fade-left' data-aos-duration='1600'>
                                    {/* <p>Rating: {review.rating}</p> */}

                                    {review.rating === '1' && <div>{starOne}</div>}
                                    {review.rating === '2' && <div>{starTwo}</div>}
                                    {review.rating === '3' && <div>{starThree}</div>}
                                    {review.rating === '4' && <div>{starFour}</div>}
                                    {review.rating === '5' && <div>{starFive}</div>}
                                </div>
                            </div>


                        </div>)
                    }


                </div>

                {
                    reviews.length === 0 && <img className='lg:w-1/2 mx-auto' src={noReviews} alt="" />
                }
            </div>

            <div data-aos='zoom-in' data-aos-duration='1000'>
                <button className='theButton mb-5 '>View All Reviews</button>
            </div>
        </div>
    );
};

export default ViewReviews;