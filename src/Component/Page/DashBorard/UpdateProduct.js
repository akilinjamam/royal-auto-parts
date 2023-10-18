import React from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateProduct = () => {

    const { uId } = useParams();
    const [getParts, setGetParts] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [minQuantity, setMinQuantity] = useState('')
    const [availableQuantity, setAvailableQuantity] = useState('')
    const [priceUnit, setPriceUnit] = useState('')
    const [img, setImg] = useState('')

    const updateProduct = (event) => {

        event.preventDefault()
        const updatePrdocucteData = {

            name: name,
            img: img,
            description: description,
            minOrderQuantity: minQuantity,
            availableQuantity: availableQuantity,
            pricePerUnit: priceUnit

        }



        // send data to the server:
        const url = `https://royal-autoparts-re-server.onrender.com/parts/${uId}`
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

    useEffect(() => {
        const url = 'https://royal-autoparts-re-server.onrender.com/parts';
        fetch(url).then(res => res.json()).then(res => setGetParts(res))
    }, [])



    const findPart = getParts?.find(f => {
        return f?._id === uId
    });

    useEffect(() => {
        setName(findPart?.name);
        setPriceUnit(findPart?.pricePerUnit);
        setAvailableQuantity(findPart?.availableQuantity);
        setMinQuantity(findPart?.minOrderQuantity)
        setDescription(findPart?.description)
        setImg(findPart?.img)
    }, [findPart])


    return (
        <div>
            <div className='mr-5' >

                <p className='color text-2xl font-bold text-left mb-4'>Update Product</p>

                <p className='text-red-400 text-left border-b-2 border-red-400 pb-2 '>Product ID :  {uId}</p><br />

                <form onSubmit={updateProduct} action="">

                    <div className='flex w-full' >
                        <div>
                            <input
                                style={{ background: 'none', color: 'white', padding: '7px', borderRadius: '10px', border: '1px solid gray' }}
                                type="text"
                                placeholder="Type product name"
                                value={name}
                                required
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <br /><br />
                            <textarea
                                style={{ background: 'none', color: 'white', padding: '7px', borderRadius: '10px', border: '1px solid gray', width: '100%' }}
                                type="text"
                                placeholder="Type description"
                                required
                                value={description}
                            /><br /><br />

                            <input
                                style={{ background: 'none', color: 'white', padding: '7px', borderRadius: '10px', border: '1px solid gray' }}
                                type="number"
                                placeholder="Type minimum quantity"
                                required
                                value={minQuantity}
                            /><br /><br />


                            <input className='theButton lg:w-full  text-white  ' type="submit" value="Update" />
                        </div>
                        <div className='ml-10'>
                            <input
                                style={{ background: 'none', color: 'white', padding: '7px', borderRadius: '10px', border: '1px solid gray' }}
                                type="number"
                                placeholder="Type price"
                                value={priceUnit}
                                required /><br /><br />

                            <input
                                style={{ background: 'none', color: 'white', padding: '7px', borderRadius: '10px', border: '1px solid gray' }}
                                type="text"
                                placeholder="Type img link"
                                required
                                value={img}
                            /><br /><br />

                            <input
                                style={{ background: 'none', color: 'white', padding: '7px', borderRadius: '10px', border: '1px solid gray' }}
                                type="number"
                                placeholder="Type available quantity"
                                required
                                value={availableQuantity}
                            /><br /><br />

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
                            <input style={{ background: 'none',color:'white',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} readOnly type="text" value={user.displayName}  /><br /><br />

                            <input style={{ background: 'none',color:'white',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" value={user.email}  /><br /><br />

                            <textarea style={{ background: 'none',color:'white',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" placeholder="Type Education" class="input input-bordered input-primary w-full max-w-xs h-12" required />
                        </div>

                        <div className='ml-10'>
                            <input style={{ background: 'none',color:'white',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" placeholder="Type Location City/District"  required /><br /><br />

                            <input style={{ background: 'none',color:'white',  padding:'7px', borderRadius:'10px', border:'1px solid gray' }} type="text" placeholder="Type Linkdin profile name"  required /><br /><br />

                            <input className=' theButton w-full  text-white  ' type="submit" value="SUBMIT" />
                        </div>
                    </div>





*/