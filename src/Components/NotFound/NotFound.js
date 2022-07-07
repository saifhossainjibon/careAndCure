import React from 'react';
import notFound from '../../utilities/notfound.jpg'
const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img className='md:w-6/12' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;