import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Navbar/Loading/Loading';
import defultImage from '../../../../top-trending/car-bulb.png';
import noReviews from '../../../../top-trending/NO-REVIEWS.png'



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





    return (
        <div className='lg:w-5/6 mx-auto'>
            <br /><br />
            <h2 className='text-4xl font-bold text-left'>ALL REVIEWS</h2>
            <br /><br />
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>

                {
                    reviews.map(review => <div key={review._id}>

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


                    </div>)
                }


            </div>

            {
                reviews.length === 0 && <img className='lg:w-1/2 mx-auto' src={noReviews} alt="" />
            }
        </div>
    );
};

export default Reviews;