import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Blue Collar",
            description: "Providing skilled and semi-skilled workforce for logistics, warehousing, and delivery services.",
            icon: "👷‍♂️"
        },
        {
            title: "Grey Collar",
            description: "Technical and specialized staff filling the gap between white and blue collar roles.",
            icon: "🔧"
        },
        {
            title: "BPO Services",
            description: "Dedicated telecallers and chat support agents to handle your customer service needs.",
            icon: "🎧"
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
