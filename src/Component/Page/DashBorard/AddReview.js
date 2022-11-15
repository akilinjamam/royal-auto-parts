import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {

    const [theRatings, setTheRatings] = useState('')
    const [des, setDes] = useState('')

    const [user] = useAuthState(auth)

    const parsedRating = parseInt(theRatings);
    console.log(parsedRating);



    const handleRating = (event) => {
        const ratings = event.target.value;
        setTheRatings(ratings)
    }

    const handleDes = (event) => {

        const des = event.target.value

        setDes(des)
    }

    const handleReviews = (event) => {

        event.preventDefault()

        const description = event.target.description.value;
        const rating = event.target.rating.value;
        console.log(description, rating);


        // post to server

        const review = {
            description: description,
            rating: rating,
            name: user.displayName,
            img: user.photoURL,
        }

        fetch('https://ancient-crag-35082.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(review)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success(' Thaks for Giving a Review')
                }
            })

    }

    let showError;
    if (parsedRating > 5 || parsedRating < 1) {

        showError = <p className='text-red-600 '>please give a rating from one to five </p>
    }

    let desError;
    if (des.length > 60) {
        desError = <p className='text-red-600'>can not give review more than 60 charecter</p>
    }




    return (
        <div>
            <br /><br />
            <div className='border border-gray-400 rounded p-4 lg:w-1/3 mx-auto font-bold'>
                <div>
                    <h2 className='text-2xl text-orange-500'>Add Reviews</h2>
                </div>
                <br />
                <form onSubmit={handleReviews} action="">

                    <textarea onChange={handleDes} type="text" name='description' placeholder="Type a Short Description" class="input input-bordered w-full max-w-xs h-24 " required /><br /><br />
                    {desError}
                    <input onChange={handleRating} type="number" name='rating' placeholder="please give  ratings" class="input input-bordered w-full max-w-xs" required /><br /><br />
                    {showError}
                    <br />
                    <input disabled={parsedRating > 5 || parsedRating < 1 || des.length > 60} class="btn btn-sm" type="submit" value=" place Order" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;