import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    console.log(serviceId)
    console.log(serviceDetails)
    return (
        <div>

        </div>
    );
};

export default ServiceDetail;