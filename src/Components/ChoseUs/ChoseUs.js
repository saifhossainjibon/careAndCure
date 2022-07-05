import React from 'react';
import photo1 from '../../utilities/services/download.webp'
import photo2 from '../../utilities/services/download (1).webp'
import photo3 from '../../utilities/services/download (2).webp'
import photo4 from '../../utilities/services/download (3).webp'
const ChoseUs = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center pb-6'>Why you choose Us?</h1>
            <p className='text-center pb-10'>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living,<br /> tree word link available in the service for subdue fruit.</p>
            <div className='grid md:grid-cols-4 gap-9 mb-24 container mx-auto'>
                <div className="max-w-sm py-12 hover:bg-white text-center hover:border hover:border-gray-200 hover:shadow-md" style={{ backgroundColor: "#F9F9FD" }}>
                    <img className="mx-auto" src={photo1} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">ADVANCE TECHNOLOGY</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia?</p>
                    </div>
                </div>
                <div className="max-w-sm py-12 hover:bg-white text-center hover:border hover:border-gray-200 hover:shadow-md" style={{ backgroundColor: "#F9F9FD" }}>
                    <img className="mx-auto" src={photo2} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">COMFORTABLE PLACE</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia?</p>
                    </div>
                </div>
                <div className="max-w-sm py-12 hover:bg-white text-center hover:border hover:border-gray-200 hover:shadow-md" style={{ backgroundColor: "#F9F9FD" }}>
                    <img className="mx-auto" src={photo3} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">QUALITY EQUIPMENT</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia?</p>
                    </div>
                </div>
                <div className="max-w-sm py-12 hover:bg-white text-center hover:border hover:border-gray-200 hover:shadow-md" style={{ backgroundColor: "#F9F9FD" }}>
                    <img className="mx-auto" src={photo4} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">FRIENDLY STAFF</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quia?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;