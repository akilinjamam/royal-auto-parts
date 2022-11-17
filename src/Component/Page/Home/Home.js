import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Footer from './Footer/Footer';
import MustNeed from './MustNeed/MustNeed';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';
import TopTranding from './TopTranding/TopTranding';
import BannerComponents from './Banner/BannerComponents';
const Home = () => {
    return (
        <div >
            {/* <Banner></Banner> */}
            <BannerComponents></BannerComponents>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <br /><br />
            <TopTranding></TopTranding>
            <MustNeed></MustNeed>
            <Footer></Footer>
        </div>
    );
};

export default Home;