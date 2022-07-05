import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import img from '../../utilities/contact.webp'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
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
                <h2 className='text-4xl font-bold my-4 mx-24'>Our Specialished Services</h2>
                <p className='mx-24'>Green above he cattle god saw day multiply under fill in the cattle fowl a all,<br /> living, tree word link available in the service for subdue fruit.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-9 mb-24 container mx-auto my-16'>
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;