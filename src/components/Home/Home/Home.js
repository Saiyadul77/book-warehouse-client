import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Inventory from '../Inventory/Inventory';
import Manage from '../ManageItem/Manage/Manage';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Manage></Manage>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;