'use client';

import React from 'react';

const services = [
    {
        icon: 'fa-hospital',
        title: 'الرعاية الأولية',
        description: 'خدمات طبية شاملة للأفراد والأسر في إطار الوقف الخيري'
    },
    {
        icon: 'fa-user-md',
        title: 'التخصصات الطبية',
        description: 'خدمات متخصصة في مختلف المجالات الطبية بأعلى معايير الجودة'
    },
    {
        icon: 'fa-ambulance',
        title: 'الخدمات الطارئة',
        description: 'رعاية طبية فورية للحالات الطارئة على مدار الساعة'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
                    خدماتنا الطبية
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <i className={`fas ${service.icon} text-2xl text-blue-600`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 