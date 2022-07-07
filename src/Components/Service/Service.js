import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const { key, name, photo, discription } = props.service;
    return (
        <div>
            <div>
                <div className="flex flex-col items-center bg-white  border shadow-md md:flex-row  hover:bg-gray-100">
                    <img className="object-cover w-full md:h-auto md:w-64" src={photo} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h5>
                        <p className="mb-3 font-normal text-gray-700 ">{discription.slice(0, 100)}</p>
                        <NavLink to={`/service/${key}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-32">
                            See Service Details
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Service;