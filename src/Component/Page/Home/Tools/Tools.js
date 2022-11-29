import React, { useEffect, useState } from 'react';
import useTools from '../../../Shared/useTools';
import Part from './Part';
import PartThree from './PartThree';
import PartTwo from './PartTwo';
import './Tools.css'


const Tools = () => {

    const [parts] = useTools([])

    const partsSlice = parts.slice(1, 2)
    const partTwo = parts.slice(2, 3)
    const partThree = parts.slice(3, 4)


    return (
        <div>

            <div className='background-modification'>

                <div className='lg:w-5/6 mx-auto'>
                    <br />
                    <div data-aos='fade-up' data-aos-duration='500'>
                        <h2 className='text-4xl font-bold color  theFonts'> All Parts </h2>
                    </div>
                </div>

                <div className='partOneMarginTopRes' >
                    {
                        partsSlice.map(p => <Part part={p} key={p._id} ></Part>)

                    }
                </div>
            </div>

            <div className='partTwoMarginTopRes'>
                {
                    partTwo.map(p => <PartTwo part={p} key={p._id}></PartTwo>)
                }
            </div>

            <div className='partThreeMarginTopRes'>
                {
                    partThree.map(p => <PartThree part={p} key={p._id}></PartThree>)
                }
            </div>
        </div>
    );
};

export default Tools;