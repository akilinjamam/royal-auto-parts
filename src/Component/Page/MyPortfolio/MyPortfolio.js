import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <br /><br /><br />
            <div className='bg-base-200 p-5 text-left '>
                <h2 className='text-2xl font-bold'>INJAMAM ISLAM CHOWDHURY</h2>
                <p>Email : akilinjamam@gmail.com</p>
                <h2>Educational Background:</h2>
                <p>BBA & MBA in Management, ICMAB in Operation Level</p>
                <h2>Skills: </h2>
                <p> HTML5 , CSS3 , Bootstrap , Tailwind CSS ,JavaScript ,ES6, React , Node Js , Express JS , MongoDB, Firebase, adobe photoshop and adobe illustration</p>



                <div >
                    <p className="text-center font-bold mt-4 mb-4">Live Projects</p>




                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="text-purple-500 font-bold link-hover" href="https://travelbea-80478.firebaseapp.com/"> Travelbea</a></div>
                        <div class="divider"></div>
                        <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="text-purple-500 font-bold link-hover" href="https://grand-blini-756b51.netlify.app/">Watch Gallery</a></div>
                        <div class="divider"></div>
                        <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="text-purple-500 font-bold link-hover" href="https://royal-autoparts.web.app/">Royal Auto Parts</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;