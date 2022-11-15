import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UpdateProduct = () => {



    const { uId } = useParams()

    const navigate = useNavigate()

    const updateProduct = (event) => {

        const name = event.target.name.value;
        const description = event.target.description.value;
        const minOrderQuantity = event.target.quantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const pricePerUnit = event.target.price.value;
        const img = event.target.img.value;

        const updatePrdocucteData = {

            name: name,
            img: img,
            description: description,
            minOrderQuantity: minOrderQuantity,
            availableQuantity: availableQuantity,
            pricePerUnit: pricePerUnit

        }



        // send data to the server:
        const url = `https://ancient-crag-35082.herokuapp.com/parts/${uId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePrdocucteData)
        })

            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)

                if (data) {
                    toast.success('updated successfully');
                    // event.target.reset()

                }

            })



    }
    return (
        <div>
            <div class="artboard lg:w-1/4 mx-auto border border-emerald-400 p-10 rounded-xl mt-9">


                <h2 className='text-emerald-400 font-bold text-3xl mb-10 uppercase'>Update Product </h2>

                <p className='text-red-400'> ID:{uId}</p><br />

                <form onSubmit={updateProduct} action="">

                    <textarea type="text" name='name' placeholder="Type product name" class="input input-bordered input-primary w-full max-w-xs h-16" required />

                    <input type="text" name='description' placeholder="Type description" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                    <input type="number" name='quantity' placeholder="Type minimum quantity" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />
                    <input type="number" name='availableQuantity' placeholder="Type available quantity" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />
                    <input type="number" name='price' placeholder="Type price" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                    <input type="text" name='img' placeholder="Type img link" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                    <input className='btn btn-primary lg:w-full  text-white  ' type="submit" value="Update" />


                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;