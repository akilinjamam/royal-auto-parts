import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Navbar/Loading/Loading';
import '../../Shared/Navbar/Navbar.css'

const Purchase = () => {

    const [newQuantity, setNewQuantity] = useState('')

    console.log(parseInt(newQuantity))

    const newparsedQuantity = parseInt(newQuantity)

    const { purchaseId } = useParams()

    const [user] = useAuthState(auth)

    const [purchase, setPurchase] = useState([]);



    const { minOrderQuantity, img, availableQuantity, pricePerUnit, name, description } = purchase



    const minParsedQuantity = parseInt(purchase.minOrderQuantity)
    const availableParsedQuantity = parseInt(availableQuantity)


    useEffect(() => {
        const url = `https://ancient-crag-35082.herokuapp.com/parts/${purchaseId}`;
        fetch(url, {
            method: 'GET',
            'authorization': `Bearer ${localStorage.getItem('accessToken')} `
        })
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

    if (!img) {

        return <Loading></Loading>
    }


    const handleQuantityChange = (event) => {

        const quantity = event.target.value;
        console.log(quantity)



        setNewQuantity(quantity)
    }

    const handleQuantity = (event) => {
        event.preventDefault()

        const address = event.target.address.value
        const phone = event.target.phone.value

        const orders = {

            partsName: name,
            userEmail: user.email,
            orderQuantity: newparsedQuantity,
            pricePerUnit: pricePerUnit,
            address: address,
            phone: phone,

        }


        // post to server

        fetch('https://ancient-crag-35082.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(orders)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success(' Order Placed success')
                }
            })


    }
    let showErrorMessage
    if (newparsedQuantity < minParsedQuantity) {
        showErrorMessage = <p className='text-red-500 text-sm absolute'>Please type minimum Order</p>
    }

    if (newparsedQuantity > availableParsedQuantity) {
        showErrorMessage = <p className='text-red-500 text-sm absolute'>Not available</p>
    }


    return (
        <div className='w-2/3 mx-auto'>
            <br />
            <div class="hero min-h-screen ">
                <div data-aos='zoom-in' data-aos-duration='1000' class="hero-content text-left flex-col lg:flex-row  ">

                    <img style={{ width: '400px' }} src={img} class=" rounded-lg  " alt='' />

                    <div>



                        <form onSubmit={handleQuantity} action="">
                            <h1 class="text-3xl text-white font-bold ml-4 ">{name}</h1>
                            <br />
                            <h1 class="text-sm text-white font-bold ml-4  ">{description}</h1>

                            <div className=' p-4'>
                                {/* <p class="py-1">Your Name : {user.displayName} </p>
                                <p class="py-1">Your Email : {user.email} </p> */}
                                <p class="py-1 text-white">Available order : {availableQuantity} </p>
                                <p class="py-1 text-white">Minimum order : {minOrderQuantity}</p>
                                <p class="py-1 text-white">Price per Unit : {pricePerUnit} </p><br />

                                <div className='flex items-center mb-12 '>
                                    <div>
                                        <input style={{ background: 'none', border: '1px solid red' }} className='mr-12  p-2 rounded' type="number" name="quantity" placeholder='Type Order Quantity' id="" onChange={handleQuantityChange} required />

                                        {showErrorMessage}
                                    </div>

                                    <input style={{ background: 'none', border: '1px solid red' }} className='mr-12  p-2 rounded' type="text" name="address" placeholder='Type address' id="" required />
                                    <input style={{ background: 'none', border: '1px solid red' }} className=' p-2 rounded' type="number" name="phone" placeholder='Type phone' id="" required />
                                </div>
                                <input disabled={newparsedQuantity < minParsedQuantity || newparsedQuantity > availableParsedQuantity} class="btn btn-sm" type="submit" value=" place Order" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;