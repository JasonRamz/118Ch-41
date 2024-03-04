import React, { useState, useEffect } from 'react';
import './service.css';

function Service() {
    const initialServices = [
        { name: "Gel Strengthening Overlay", details: "a type of manicure that involves layering a nail-product — either acrylic, gel, or dip — onto the nails without extending their length. ", cost: "$60", category: "Nails" },
        { name: "Dip/Acrylics transition to gel (one-time)", details: "This is the ONLY safe and non-damaging transition that we can offer at the moment!!", cost:"$120", category: "Nails" },
        { name: "Gel Extensions", details: "You only have to do these nail extensions once! A nail extensions expert will perfect your cuticles, sculpt your nails to your desired length with gel, polish with a gel color of your choice, and finish with a design of your choice", cost: "$120", category: "Nails" },
        { name: "Long Layers ", details: "A Long layered shape using internal graduated layering and over-direction to protect fine hair.", cost: "$60", category: "Hair" },
        { name: "Curtain Bangs and Shag Haircut ", details: " A fringe is a thing to puzzle over. In 2024 bangs are on-trend, so a shag with curtain bangs can be one of the best haircuts to try asap.", cost: "$60", category: "Hair" },
        { name: "Fun Medium Messy Shag.", details: " Get the best out of your wavy hair with a proper cut. When looking through trendy hair cut styles for women, you see many inspiring slightly frizzy, tousled looks.", cost: "$60", category: "Hair" },
        { name: "Classic Lash Extension", details: "Eyelash extensions enhance the natural beauty of the eyes and make them pop!", cost: "$100", category: "Lashes" },
        { name: "Lash Extension Removal", details: "Safely remove your lash extensions without damaging the natural lashes.", cost: "$100", category: "Lashes" },
        { name: "Classic Lash Extension Fill", details: "This service is usually booked 2 weeks after your full set was applied. If you come in for a fill appointment but have less than 50% of the lashes remaining, your appointment will be switched over to a full set.", cost: "$100", category: "Lashes" },
    ];

    const [services, setServices] = useState(initialServices);
    const [filteredServices, setFilteredServices] = useState(initialServices);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedCategory');
        if (storedCategory) {
            setSelectedCategory(storedCategory);
        }

        const storedSearchTerm = localStorage.getItem('searchTerm');
        if (storedSearchTerm) {
            setSearchTerm(storedSearchTerm);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedCategory', selectedCategory);
        localStorage.setItem('searchTerm', searchTerm);
    }, [selectedCategory, searchTerm]);

    const renderService = (service, index) => (
        <li key={index} className="service-item">
            <span className="table-cell">Service Name: {service.name}</span>
            <span className="table-cell">Details: {service.details}</span>
            <span className="table-cell">Cost: {service.cost}</span>
            <span className="table-cell"><button>Book Now</button></span>
        </li>
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const filtered = category ? initialServices.filter(service => service.category === category) : initialServices;
        setFilteredServices(filtered);
        setSearchTerm('');
    };

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = initialServices.filter(service => service.name.toLowerCase().includes(value));
        setFilteredServices(filtered);
        setSelectedCategory(null);
    };

    return (
        <div className='page'>
            <h2>Our Services</h2>
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <button  className={selectedCategory === 'Nails' ? "nav-li active" : "nav-li"} onClick={() => handleCategoryChange('Nails')}>Nails</button>
                    </li>
                    <li className="nav-item">
                        <button className={selectedCategory === 'Hair' ? "nav-li active" : "nav-li"} onClick={() => handleCategoryChange('Hair')}>Hair</button>
                    </li>
                    <li className="nav-item">
                        <button className={selectedCategory === 'Lashes' ? "nav-li active" : "nav-li"} onClick={() => handleCategoryChange('Lashes')}>Lashes</button>
                    </li>
                </ul>
            </nav>
            <div className="service-table">
                <div className="table-header">
                    <span className="header-cell">Service Name</span>
                    <span className="header-cell">Details</span>
                    <span className="header-cell">Cost</span>
                    <span className="header-cell"></span>
                </div>
                <ul className="service-list">
                    {filteredServices.map(renderService)}
                </ul>
            </div>
        </div>
    );
}

export default Service;
