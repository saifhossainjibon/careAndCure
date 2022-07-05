import React from 'react';
import ChoseUs from '../ChoseUs/ChoseUs';
import Doctors from '../Doctors/Doctors';
// import Doctor from '../Doctor/Doctor';

import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ChoseUs></ChoseUs>
            {/* <Doctor></Doctor> */}
            (<Doctors></Doctors>).slice(0, 4)
        </div>

    );
};

export default Home;