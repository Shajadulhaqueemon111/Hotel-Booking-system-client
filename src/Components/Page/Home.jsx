import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';

// import Parallaxer from '../Parallax/Parallaxer';
import Offer from '../Offer/Offer';
import Testimonials from '../Testimonials/Testimonials';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Parallaxer></Parallaxer> */}
            <Map></Map>
            <Offer></Offer>
            <Testimonials></Testimonials>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;