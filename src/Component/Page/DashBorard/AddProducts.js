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

        fetch('https://royal-autoparts-re-server.vercel.app/parts', {
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


            <div className='text-left ml-1 text-white'>

                <p className='color text-2xl font-bold mb-5 theFonts'>Add Product</p>
                <form onSubmit={addParts} >



                    <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} type="text" name='name' placeholder="type parts name" required />
                    <br />

                    <textarea style={{ background: 'none', border: '1px solid gray', width: '400px', borderRadius: '10px', padding: '7px' }} type="text" name='description' placeholder="Type a Short Description" /><br />

                    <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} type="number" name='minQuntity' placeholder="give minimum quantity" required />
                    <input style={{ background: 'none', border: '1px solid gray', marginLeft: '20px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} type="number" name='availableQuantity' placeholder=" give available quantity" required /><br />

                    <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} type="number" name='price' placeholder="give price" required />

                    <input style={{ background: 'none', border: '1px solid gray', marginLeft: '20px', borderRadius: '10px', padding: '10px', marginBottom: '10px' }} type="text" name='img' placeholder=" provide image link here" required /><br />


                    <input className='theButton' type="submit" value=" Add Product" />


                </form>
            </div>

        </div>
    );
};

export default AddProducts;