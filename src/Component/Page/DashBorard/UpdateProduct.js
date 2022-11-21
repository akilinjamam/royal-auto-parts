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
            <div className='mr-5' >

                <p className='color text-2xl font-bold text-left mb-4'>Update Product</p>

                <p className='text-red-400 text-left border-b-2 border-red-400 pb-2 '>Product ID :  {uId}</p><br />

                <form onSubmit={updateProduct} action="">

                    <div className='flex w-full' >
                        <div>
                            <input style={{ background: 'none', padding: '7px', borderRadius: '10px', border: '1px solid gray' }} type="text" name='name' placeholder="Type product name" required />
                            <br /><br />
                            <textarea style={{ background: 'none', padding: '7px', borderRadius: '10px', border: '1px solid gray', width: '100%' }} type="text" name='description' placeholder="Type description" required /><br /><br />

                            <input style={{ background: 'none', padding: '7px', borderRadius: '10px', border: '1px solid gray' }} type="number" name='quantity' placeholder="Type minimum quantity" required /><br /><br />


                            <input className='theButton lg:w-full  text-white  ' type="submit" value="Update" />
                        </div>
                        <div className='ml-10'>
                            <input style={{ background: 'none', padding: '7px', borderRadius: '10px', border: '1px solid gray' }} type="number" name='price' placeholder="Type price" required /><br /><br />

                            <input style={{ background: 'none', padding: '7px', borderRadius: '10px', border: '1px solid gray' }} type="text" name='img' placeholder="Type img link" required /><br /><br />

                            <input style={{ background: 'none', padding: '7px', borderRadius: '10px', border: '1px solid gray' }} type="number" name='availableQuantity' placeholder="Type available quantity" required /><br /><br />

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
                            <input style={{ background: 'none',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} readOnly type="text" name='name' value={user.displayName}  /><br /><br />

                            <input style={{ background: 'none',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" name='email' value={user.email}  /><br /><br />

                            <textarea style={{ background: 'none',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" name='education' placeholder="Type Education" class="input input-bordered input-primary w-full max-w-xs h-12" required />
                        </div>

                        <div className='ml-10'>
                            <input style={{ background: 'none',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" name='location' placeholder="Type Location City/District"  required /><br /><br />

                            <input style={{ background: 'none',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" name='linkdin' placeholder="Type Linkdin profile name"  required /><br /><br />

                            <input className=' theButton w-full  text-white  ' type="submit" value="SUBMIT" />
                        </div>
                    </div>





*/