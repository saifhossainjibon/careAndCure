import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import img from '../../utilities/contact.webp'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    // console.log(doctors, setDoctors)

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (

        <div>
            <div className=' doctors-section'
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    padding: "100px 0 "
                }}
            >
                <h2 className='text-4xl font-bold my-4 mx-24'>Our Specialished Doctors</h2>
                <p className='mx-24'>Green above he cattle god saw day multiply under fill in the cattle fowl a all,<br /> living, tree word link available in the service for subdue fruit.</p>
            </div>

            <div className='container mx-auto my-4'>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                    <li className="mr-2">
                        <a href="bj" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active">ALL DOCTORS</a>
                    </li>
                    <li className="mr-2">
                        <a href="bj" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">UROLOGY</a>
                    </li>
                    <li className="mr-2">
                        <a href="bj" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">PLASTIC SURGERY</a>
                    </li>
                    <li className="mr-2">
                        <a href="hi" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50">NEUROLOGIST</a>
                    </li>
                    <li className="mr-2">
                        <a href="hi" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">DENTAL</a>
                    </li>
                </ul>
            </div>
            <div className='grid md:grid-cols-4 gap-9 mb-24 container mx-auto'>

                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}></Doctor>)
                }
            </div>
            <div className='container text-center mb-4'>
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <a href="1" aria-current="page" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
                        </li>
                        <li>
                            <a href="2" className="py-2 px-3 leading-tight text-blue-600  bg-blue-50   border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                        </li>
                        <li>
                            <a href="3" className="py-2 px-3 leading-tight  text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                        </li>
                        <li>
                            <a href="4" className="py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 ">3</a>
                        </li>
                        <li>
                            <a href="5" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                        </li>
                        <li>
                            <a href="6" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                        </li>
                        <li>
                            <a href="7" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Doctors;