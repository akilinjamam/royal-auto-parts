import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Navbar/Loading/Loading';
import defultImage from '../../../../background-image/default-image.png';
import noReviews from '../../../../top-trending/NO-REVIEWS.png'
import { Link } from 'react-router-dom';
import stars from '../../../../background-image/star.png'
import './Reviews.css'



const Reviews = () => {

    // const [user] = useAuthState(auth)

    // console.log(user)

    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://ancient-crag-35082.herokuapp.com/reviews', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    const slicedReviews = reviews.slice(0, 4)

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
            <div className='lg:w-full mx-auto'>
                <br /><br />
                <h2 data-aos='fade-up' data-aos-duration='1000' className='text-4xl font-bold color theFonts'>All Reviews</h2>
                <br /><br />
                <div className='fullReview' >
                    {/* className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10' */}
                    {
                        slicedReviews.map(review => <div key={review._id} data-aos='flip-up' data-aos-duration='600' className='m-16 border border-red-700 rounded-lg p-3 w-2/3 mx-auto flex items-center' >
                            {/* style={{ width: '90px' }} */}
                            {/*  */}
                            <div data-aos='zoom-in' data-aos-duration='1000' className='resRevImg' >
                                <img style={{ borderRadius: '50px', border: '3px solid purple' }} src={review.img === null ? defultImage : review.img} alt="Shoes" />
                            </div>

                            <div className='text-left ml-7 text-gray-300 resRevDetail'>
                                <div data-aos='fade-left' data-aos-duration='1200'>
                                    <p>{review.name}</p>
                                </div>
                                <div data-aos='fade-left' data-aos-duration='1400'>
                                    <p>{review.description}</p>
                                </div>
                                <div data-aos='fade-left' data-aos-duration='1600' className=''>
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

                <div className='resReview'>
                    {
                        slicedReviews.map(review =>
                            <div style={{ width: '70%', margin: 'auto', border: '1px solid red', padding: '10px', marginBottom: '20px', borderRadius: '10px', color: 'white' }}>

                                <div >
                                    <img className='mx-auto' style={{ borderRadius: '50px', border: '3px solid purple' }} src={review.img === null ? defultImage : review.img} alt="Shoes" />
                                </div>
                                <br />
                                <div>
                                    <p>{review.name}</p>
                                    <p>{review.description}</p>
                                    <br />
                                    <div data-aos='fade-left' data-aos-duration='1600' className='resRevButton' >
                                        {review.rating === '1' && <div>{starOne}</div>}
                                        {review.rating === '2' && <div>{starTwo}</div>}
                                        {review.rating === '3' && <div>{starThree}</div>}
                                        {review.rating === '4' && <div>{starFour}</div>}
                                        {review.rating === '5' && <div>{starFive}</div>}
                                        <br />
                                    </div>

                                </div>

                            </div>)
                    }
                </div>
                <br /><br />

                {
                    reviews.length === 0 && <img className='lg:w-1/2 mx-auto' src={noReviews} alt="" />
                }
            </div>

            <div data-aos='zoom-in' data-aos-duration='1000'>
                <button className='theButton mb-5 '> <Link to='/viewReviews'>View All Reviews</Link> </button>
            </div>
        </div>
    );
};

export default Reviews;



/* 

 <div class="card w-96 bg-purple-700 text-primary-content text-left ">


                            <div style={{ zIndex: '5' }} class="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={review.img === null ? defultImage : review.img} alt="Shoes" /></figure>
                                <div class="card-body">

                                    <h2 class="card-title text-white">{review.description}</h2>
                                    <p className='text-green-400 text-xl font-bold'>{review.name}</p>
                                    <p className='text-white'>Ratings: <span className='text-yellow-300 font-bold'>{review.rating}</span> </p>

                                </div>
                            </div>
                        </div>



*/