import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
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
        <div className='w-3/3 mx-auto'>
            <br />
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-left flex-col lg:flex-row border border-gray-500">
                    <img src={img} class="max-w-xl  rounded-lg shadow-2xl img-cntrl" alt='' />
                    <div>



                        <form onSubmit={handleQuantity} action="">
                            <h1 class="text-3xl font-bold ">{name}</h1>
                            <h1 class="text-sm font-bold ">{description}</h1>
                            <br />
                            <div className='border border-gray-400 rounded-lg p-4'>
                                {/* <p class="py-1">Your Name : {user.displayName} </p>
                                <p class="py-1">Your Email : {user.email} </p> */}
                                <p class="py-1">Minimum order : {minOrderQuantity}</p>
                                <input type="number" name="quantity" placeholder='Type Order Quantity' id="" onChange={handleQuantityChange} required />
                                {showErrorMessage}
                                <br /><br />
                                <p class="py-1">Available order : {availableQuantity} </p>
                                <p class="py-1">Price per Unit : {pricePerUnit} </p><br />
                                <input type="text" name="address" placeholder='Type address' id="" required /><br /><br />
                                <input type="number" name="phone" placeholder='Type phone' id="" required /><br /><br />
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