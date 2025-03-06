'use client';

import React, { useState } from 'react';

interface Service {
    name: string;
    description: string;
}

interface Clinic {
    name: string;
    icon: string;
    services: Service[];
}

const clinics: Clinic[] = [
    {
        name: 'عيادة الباطنية',
        icon: 'fa-stethoscope',
        services: [
            { name: 'فحص عام', description: 'فحص شامل للجسم وتقييم الحالة الصحية العامة' },
            { name: 'متابعة الأمراض المزمنة', description: 'متابعة وعلاج الأمراض المزمنة مثل السكري والضغط' },
            { name: 'استشارات غذائية', description: 'تقديم النصائح الغذائية المناسبة للحالة الصحية' }
        ]
    },
    {
        name: 'عيادة القلب',
        icon: 'fa-heartbeat',
        services: [
            { name: 'تخطيط القلب', description: 'فحص كهربائية القلب وتقييم وظائفه' },
            { name: 'متابعة أمراض القلب', description: 'متابعة وعلاج أمراض القلب المختلفة' },
            { name: 'فحص الضغط', description: 'قياس ضغط الدم وتقييم الحالة' }
        ]
    },
    {
        name: 'عيادة الأطفال',
        icon: 'fa-baby',
        services: [
            { name: 'فحص النمو', description: 'متابعة نمو الطفل وتطوره' },
            { name: 'التطعيمات', description: 'تقديم التطعيمات اللازمة للأطفال' },
            { name: 'علاج الأمراض', description: 'تشخيص وعلاج أمراض الأطفال' }
        ]
    },
    {
        name: 'عيادة النساء والتوليد',
        icon: 'fa-female',
        services: [
            { name: 'متابعة الحمل', description: 'متابعة صحة الأم والجنين أثناء الحمل' },
            { name: 'الفحص الدوري', description: 'فحص دوري للنساء للكشف المبكر عن الأمراض' },
            { name: 'استشارات تنظيم الأسرة', description: 'تقديم النصائح حول تنظيم الأسرة' }
        ]
    }
];

const Clinics: React.FC = () => {
    const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
    const [hoveredClinic, setHoveredClinic] = useState<Clinic | null>(null);

    return (
        <section id="clinics" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                        عياداتنا
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[var(--primary-color)] rounded-full"></div>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">
                        نقدم مجموعة متكاملة من العيادات المتخصصة لتلبية احتياجاتكم الصحية
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {clinics.map((clinic, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700"
                            onMouseEnter={() => setHoveredClinic(clinic)}
                            onMouseLeave={() => setHoveredClinic(null)}
                        >
                            <button
                                onClick={() => setSelectedClinic(selectedClinic?.name === clinic.name ? null : clinic)}
                                className="w-full p-6 text-center focus:outline-none"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                    <i className={`fas ${clinic.icon} text-2xl text-[var(--primary-color)] transition-transform duration-700 group-hover:scale-110`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2 transition-colors duration-700">{clinic.name}</h3>
                            </button>

                            {/* قائمة الخدمات */}
                            <div 
                                className={`transition-all duration-700 ease-in-out ${
                                    hoveredClinic?.name === clinic.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                } overflow-hidden`}
                            >
                                <div className="px-6 pb-6">
                                    <div className="space-y-3">
                                        {clinic.services.map((service, serviceIndex) => (
                                            <div 
                                                key={serviceIndex}
                                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-700 transform hover:translate-x-2"
                                            >
                                                <h4 className="font-semibold text-gray-800 mb-1">{service.name}</h4>
                                                <p className="text-sm text-gray-600">{service.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clinics; 