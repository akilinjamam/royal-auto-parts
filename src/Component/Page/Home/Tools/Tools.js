import React, { useEffect, useState } from 'react';
import Part from './Part';
import PartThree from './PartThree';
import PartTwo from './PartTwo';
import './Tools.css'


const Tools = () => {

    const [parts, setParts] = useState([])

    const partsSlice = parts.slice(1, 2)
    const partTwo = parts.slice(2, 3)
    const partThree = parts.slice(3, 4)
    useEffect(() => {
        const url = 'https://ancient-crag-35082.herokuapp.com/parts';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div>

            <div className='background-modification'>
                <br />
                <div className='lg:w-5/6 mx-auto'>
                    <div data-aos='fade-up' data-aos-duration='500'>
                        <h2 className='text-4xl font-bold color  theFonts'> All Parts </h2>
                    </div>
                </div>
                <br />
                <div>

                    {/* <Part></Part> */}
                    {
                        partsSlice.map(p => <Part part={p} key={p._id} ></Part>)

                    }
                </div>
            </div>

            <div>
                {
                    partTwo.map(p => <PartTwo part={p} key={p._id}></PartTwo>)
                }
            </div>

            <div>
                {
                    partThree.map(p => <PartThree part={p} key={p._id}></PartThree>)
                }
            </div>
        </div>
    );
};

export default Tools;