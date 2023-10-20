import React from 'react';
import Typewriter from 'typewriter-effect';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Navbar/Loading/Loading';
import defultImage from '../../../../background-image/default-image.png';
import noReviews from '../../../../top-trending/NO-REVIEWS.png'
import { Link } from 'react-router-dom';
import stars from '../../../../background-image/star.png';
import './Reviews.css';
import { useState } from 'react';
import { toast } from 'react-toastify';



const Reviews = () => {
    const [user] = useAuthState(auth);
    const [ratingNo, setRatingNo] = useState(0);
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://royal-autoparts-re-server.onrender.com/reviews', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()), {
        refetchInterval: 1000
    })



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

    const handleSetRating = (rate) => {
        setRatingNo(rate)
    }

    const submitReview = (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const stringifiedRating = ratingNo.toString();
        const bodyData = {
            description: description,
            rating: stringifiedRating,
            name: user?.displayName,
            img: user?.photoURL
        }

        console.log(bodyData)

        if (ratingNo && description && user?.displayName) {
            fetch('https://royal-autoparts-re-server.onrender.com/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(bodyData)
            }).then(res => res.json())
                .then(res => {
                    if (res) {
                        toast.success('review added successfully');
                        refetch()
                        setRatingNo(0)
                    }
                })
        } else {
            toast.error('please fill up all fields')
        }
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div style={{ width: '100%', height: 'auto' }} className='mx-auto'>
                <br /><br />
                <h2 className='text-4xl font-bold color theFonts'>All Reviews</h2>
                <br /><br />

                <div className="review">
                    <div className="seeReviews">
                        {
                            reviews?.slice()?.reverse()?.map(review => {
                                return (
                                    <div className="reviewContainer">
                                        <div className="reviewImg">
                                            <img style={{ borderRadius: '50px', border: '3px solid purple' }} src={review.img === null ? defultImage : review.img} alt="Shoes" />

                                        </div>
                                        <div className="reviewDetail">
                                            <div className='text-left ml-7 text-gray-300 resRevDetail'>
                                                <div >
                                                    <p>{review.name}</p>
                                                </div>
                                                <hr />
                                                <div >
                                                    <p>{review.description}</p>
                                                </div>
                                                <div className=''>
                                                    {review.rating === '1' && <div>{starOne}</div>}
                                                    {review.rating === '2' && <div>{starTwo}</div>}
                                                    {review.rating === '3' && <div>{starThree}</div>}
                                                    {review.rating === '4' && <div>{starFour}</div>}
                                                    {review.rating === '5' && <div>{starFive}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="giveReviews">
                        <div className='mx-auto'>
                            <p className=' text-left text-white text-sm mb-5 theFonts'> <Typewriter
                                options={{
                                    strings: [`give your important feedback here`, `give your opinion here`],
                                    autoStart: true,
                                    delay: 30,
                                    loop: true
                                }}
                            />  </p>
                            <hr />
                            <form onSubmit={submitReview} className='theFonts text-white text-left mt-10'>
                                <label htmlFor="">YOUR FEEDBACK :</label>
                                <br />
                                <br />
                                <textarea name='description' className='reviewInput' type="text" />
                                <br />
                                <br />
                                <label htmlFor="">GIVE RATING :</label>
                                <span className='text-yellow-400 ml-4'  >
                                    {
                                        (ratingNo === 1
                                            ||
                                            ratingNo === 2
                                            ||
                                            ratingNo === 3
                                            ||
                                            ratingNo === 4
                                            ||
                                            ratingNo === 5
                                        )
                                            ?
                                            <span onClick={() => handleSetRating(1)} ><i class="uis uis-star"></i></span>
                                            :
                                            <span onClick={() => handleSetRating(1)}><i class="uil uil-star"></i></span>
                                    }
                                </span>
                                <span className='text-yellow-400'  >
                                    {
                                        (
                                            ratingNo === 2
                                            ||
                                            ratingNo === 3
                                            ||
                                            ratingNo === 4
                                            ||
                                            ratingNo === 5
                                        )
                                            ?
                                            <span onClick={() => handleSetRating(2)} ><i class="uis uis-star"></i></span>
                                            :
                                            <span onClick={() => handleSetRating(2)}><i class="uil uil-star"></i></span>
                                    }
                                </span>
                                <span className='text-yellow-400'  >
                                    {
                                        (
                                            ratingNo === 3
                                            ||
                                            ratingNo === 4
                                            ||
                                            ratingNo === 5
                                        )
                                            ?
                                            <span onClick={() => handleSetRating(3)} ><i class="uis uis-star"></i></span>
                                            :
                                            <span onClick={() => handleSetRating(3)}><i class="uil uil-star"></i></span>
                                    }
                                </span>
                                <span className='text-yellow-400'  >
                                    {
                                        (
                                            ratingNo === 4
                                            ||
                                            ratingNo === 5
                                        )
                                            ?
                                            <span onClick={() => handleSetRating(4)} ><i class="uis uis-star"></i></span>
                                            :
                                            <span onClick={() => handleSetRating(4)}><i class="uil uil-star"></i></span>
                                    }
                                </span>
                                <span className='text-yellow-400'  >
                                    {
                                        (
                                            ratingNo === 5
                                        )
                                            ?
                                            <span onClick={() => handleSetRating(5)} ><i class="uis uis-star"></i></span>
                                            :
                                            <span onClick={() => handleSetRating(5)}><i class="uil uil-star"></i></span>
                                    }
                                </span>
                                <br />
                                <br />
                                <button type='submit' className='theButton'>Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
                <br /><br />

                {
                    reviews.length === 0 && <img className='lg:w-1/2 mx-auto' src={noReviews} alt="" />
                }
            </div>

            <div >
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