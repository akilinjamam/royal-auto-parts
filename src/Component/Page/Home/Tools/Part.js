import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Part = ({ part }) => {

    const navigate = useNavigate()
    const { _id, img, name, description, minOrderQuantity, availableQuantity, pricePerUnit
    } = part


    const handlePurchase = (id) => {

        navigate(`/purchase/${id}`)

    }
    return (
        <div>
            <div className=" card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <br />
                <div className="ml-10 items-center ">
                    <h2 className="card-title text-blue-400 text-left">{name}</h2>
                    <br />
                    <p title={description} className=" text-left font-bold"> Description: {description.length > 40 ? description.slice(0, 40) + '...' : description} </p>
                    <p className=" text-left font-bold"> Minimum-Quntity : {minOrderQuantity}</p>
                    <p className=" text-left font-bold"> Available-Quantity : {availableQuantity}</p>
                    <p className=" text-left font-bold"> Price : {pricePerUnit}</p>
                    <br />
                    <div className="card-actions">
                        <button onClick={() => handlePurchase(_id)} className="btn btn-primary text-white">Purchase</button>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Part;