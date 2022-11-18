import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Footer from './Footer/Footer';
import MustNeed from './MustNeed/MustNeed';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';
import TopTranding from './TopTranding/TopTranding';
import BannerComponents from './Banner/BannerComponents';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
const Home = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <div >

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "#0d47a1",
                    //     },
                    // },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1200,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {/* <Banner></Banner> */}
            <BannerComponents></BannerComponents>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummery></BusinessSummery>
            <br /><br />
            {/* <TopTranding></TopTranding>
            <MustNeed></MustNeed> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;