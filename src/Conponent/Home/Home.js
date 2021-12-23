import React from 'react';
import Banner from '../Banner/Banner';
import BonusSec from '../BonusSec/BonusSec';
import Caragory from '../Caragory/Caragory';
import ExtBonus from '../ExtBonus/ExtBonus';
import Footer from '../Footer/Footer';

import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Caragory/>
            <Products></Products>
            <BonusSec></BonusSec>
            <ExtBonus></ExtBonus>
            <Footer></Footer>
     
        </div>
    );
};

export default Home;