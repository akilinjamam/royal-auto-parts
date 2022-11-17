import React from 'react';
import background from '../../../../background-image/background-img.png'
import parts1 from '../../../../background-image/car-parts-1.png'
import parts2 from '../../../../background-image/car-parts-2.png'
import parts3 from '../../../../background-image/car-parts-3.png'
import parts4 from '../../../../background-image/banner-vactor-img-1.png'


const Banner = () => {
    return (


        <div >

            {/* style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'right', height: '650px', backgroundRepeat: 'no-repeat', position: 'fixed', top: '0' }} */}
        </div>
    );
};

export default Banner;



/* 
  <div>
            <br /><br />
            <div className="carousel w-full   mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
  

*/