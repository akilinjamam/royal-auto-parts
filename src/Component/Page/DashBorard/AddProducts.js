import React from 'react';
import { toast } from 'react-toastify';

const AddProducts = () => {



    const addParts = (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const minQuntity = event.target.minQuntity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const price = event.target.price.value;
        const img = event.target.img.value;


        const parts = {
            name: name,
            img: img,
            description: description,
            minOrderQuantity: minQuntity,
            availableQuantity: availableQuantity,
            pricePerUnit: price
        }



        // send to server

        fetch('https://ancient-crag-35082.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(parts)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success(' parts added successfully');

                }
            })



    }




    return (
        <div>


            <div className='border border-red-600 rounded-lg p-5 lg:w-5/6 mx-auto'>

                <h2 className='text-emerald-400 bg-red-600 rounded p-3 sticky top-0 font-bold text-3xl mb-10 uppercase'>Add Product </h2>
                <form onSubmit={addParts} >

                    <div className='flex justify-evenly'>
                        <div>
                            <input style={{ background: 'none', border: '1px solid gray' }} type="text" name='name' placeholder="type parts name" class="input input-bordered w-full max-w-xs" required /><br /><br />


                            <textarea style={{ background: 'none', border: '1px solid gray' }} type="text" name='description' placeholder="Type a Short Description" class="input input-bordered w-full max-w-xs h-24 " required /><br /><br />

                            <input style={{ background: 'none', border: '1px solid gray' }} type="number" name='minQuntity' placeholder="give minimum quantity" class="input input-bordered w-full max-w-xs" required /><br /><br />
                            <input style={{ background: 'none', border: '1px solid gray' }} type="number" name='availableQuantity' placeholder=" give available quantity" class="input input-bordered w-full max-w-xs" required /><br /><br />
                        </div>
                        <div>
                            <input style={{ background: 'none', border: '1px solid gray' }} type="number" name='price' placeholder="give price" class="input input-bordered w-full max-w-xs" required /><br /><br />
                            <input style={{ background: 'none', border: '1px solid gray' }} type="text" name='img' placeholder=" provide image link here" class="input input-bordered w-full max-w-xs" required /><br /><br />

                            <br />
                            <input class="btn btn-sm" type="submit" value=" Add Product" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;