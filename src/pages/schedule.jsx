import React, { useState, useEffect } from 'react';
import './schedule.css'; // Import your CSS file
import dataService from '../Services/dataService'; // Import your data service
import { useParams } from 'react-router-dom';

function Schedule() {
    const [services, setServices] = useState([]);
    const [serviceName, setServiceName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [cost, setCost] = useState('');
    const { id } = useParams(); // No need for default value here
    const [selectedId, setSelectedId] = useState(id);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const servicesData = await dataService.getServices();
            setServices(servicesData);
        } catch (error) {
            console.error('Error loading services:', error);
        }
    };

    const handleBooking = () => {
        if (!serviceName || !date || !time || !cost) {
            setNotification('Please fill in all fields before booking.');
            return;
        }
        console.log("Service: ", serviceName);
        setNotification('Appointment booked successfully!');
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };
    

    const handleSelectChange = (event) => {
        const selectedServiceId = parseInt(event.target.value);
        setSelectedId(selectedServiceId);
        const selectedService = services.find(service => service.id === selectedServiceId);
        if (selectedService) {
            setServiceName(selectedService.name);
            setCost(selectedService.price);
        }
    };

    return (
        <div className='page'>
            <h1>Schedule appointment</h1>
            <div className='schedule'>
                {notification && <div className="notification-show">{notification}</div>}
                <form className=''>
                    <label htmlFor="patientName">
                        Patient Name:
                        <input id="patientName" type="text" />
                    </label>
                    <label htmlFor="serviceSelect">
                        Select A service:
                    </label>
                    <select id="serviceSelect" value={selectedId} onChange={handleSelectChange}>
                        <option value="">Select a service</option>
                        {services.map(service => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="cost">
                        Cost:
                        <input id="cost" type="number" required value={cost} onChange={(e) => setCost(e.target.value)} />
                    </label>
                    <label htmlFor="date">
                        Date:
                        <input id="date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                    </label>
                    <label htmlFor="time">
                        Time:
                        <input id="time" type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
                    </label>
                    <button type="button" onClick={handleBooking}>Book Appointment</button>
                </form>
            </div>
        </div>
    );
}

export default Schedule;
