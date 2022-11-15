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
            <h2>add products</h2>
            <div className='border border-gray-400 rounded-lg p-5 lg:w-1/3 mx-auto'>
                <form onSubmit={addParts} >

                    <input type="text" name='name' placeholder="type parts name" class="input input-bordered w-full max-w-xs" required /><br /><br />


                    <textarea type="text" name='description' placeholder="Type a Short Description" class="input input-bordered w-full max-w-xs h-24 " required /><br /><br />

                    <input type="number" name='minQuntity' placeholder="give minimum quantity" class="input input-bordered w-full max-w-xs" required /><br /><br />
                    <input type="number" name='availableQuantity' placeholder=" give available quantity" class="input input-bordered w-full max-w-xs" required /><br /><br />
                    <input type="number" name='price' placeholder="give price" class="input input-bordered w-full max-w-xs" required /><br /><br />
                    <input type="text" name='img' placeholder=" provide image link here" class="input input-bordered w-full max-w-xs" required /><br /><br />

                    <br />
                    <input class="btn btn-sm" type="submit" value=" Add Product" />
                </form>
            </div>

        </div>
    );
};

export default AddProducts;