import React from 'react';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';

import Offer from '../Offer/Offer';

import NewsLetter from '../NewsLetter/NewsLetter';
import Carosoul from '../Carosoul/Carosoul';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Map></Map>
            <Offer></Offer>
           <Carosoul></Carosoul>
          
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;