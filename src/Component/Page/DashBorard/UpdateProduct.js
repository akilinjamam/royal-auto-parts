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
            <div class="artboard lg:w-5/6 mx-auto border text-white border-emerald-400 p-6 rounded-xl mt-9">


                <h2 className='text-emerald-400 bg-red-600 rounded p-3 sticky top-0 font-bold text-3xl mb-10 uppercase'>Update Product </h2>

                <p className='text-red-400'> ID:{uId}</p><br />

                <form onSubmit={updateProduct} action="">

                    <div className='flex w-full' >
                        <div>
                            <textarea style={{ background: 'none' }} type="text" name='name' placeholder="Type product name" class="input input-bordered input-primary w-full max-w-xs h-16" required />

                            <input style={{ background: 'none' }} type="text" name='description' placeholder="Type description" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                            <input style={{ background: 'none' }} type="number" name='quantity' placeholder="Type minimum quantity" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />
                            <input style={{ background: 'none' }} type="number" name='availableQuantity' placeholder="Type available quantity" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />
                        </div>
                        <div>
                            <input style={{ background: 'none' }} type="number" name='price' placeholder="Type price" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                            <input style={{ background: 'none' }} type="text" name='img' placeholder="Type img link" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                            <input className='btn btn-primary lg:w-full  text-white  ' type="submit" value="Update" />
                        </div>
                    </div>




                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;


/* 

 <div className='flex'>
                        <div>
                            <input style={{ background: 'none' }} readOnly type="text" name='name' value={user.displayName} class="input input-bordered input-primary w-full max-w-xs" /><br /><br />

                            <input style={{ background: 'none' }} type="text" name='email' value={user.email} class="input input-bordered input-primary w-full max-w-xs" /><br /><br />

                            <textarea style={{ background: 'none' }} type="text" name='education' placeholder="Type Education" class="input input-bordered input-primary w-full max-w-xs h-12" required />
                        </div>

                        <div className='ml-10'>
                            <input style={{ background: 'none' }} type="text" name='location' placeholder="Type Location City/District" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                            <input style={{ background: 'none' }} type="text" name='linkdin' placeholder="Type Linkdin profile name" class="input input-bordered input-primary w-full max-w-xs" required /><br /><br />

                            <input className=' theButton w-full  text-white  ' type="submit" value="SUBMIT" />
                        </div>
                    </div>





*/