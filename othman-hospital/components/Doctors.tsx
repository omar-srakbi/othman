'use client';

import React, { useState, useRef, useEffect } from 'react';

const doctors = [
    {
        name: 'د. أحمد محمد',
        specialty: 'استشاري الباطنية',
        description: 'خبرة 15 عاماً في مجال الباطنية والطب العام',
        image: '/images/doctors/doctor1.jpg',
        schedule: 'السبت - الخميس: 9:00 صباحاً - 5:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. سارة أحمد',
        specialty: 'استشارية النساء والتوليد',
        description: 'خبرة 12 عاماً في مجال النساء والتوليد',
        image: '/images/doctors/doctor2.jpg',
        schedule: 'السبت - الخميس: 10:00 صباحاً - 6:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. محمد علي',
        specialty: 'استشاري القلب',
        description: 'خبرة 18 عاماً في مجال أمراض القلب',
        image: '/images/doctors/doctor3.jpg',
        schedule: 'السبت - الخميس: 8:00 صباحاً - 4:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. فاطمة حسن',
        specialty: 'استشارية الأطفال',
        description: 'خبرة 10 أعوام في طب الأطفال',
        image: '/images/doctors/doctor4.jpg',
        schedule: 'السبت - الخميس: 11:00 صباحاً - 7:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. خالد سعيد',
        specialty: 'استشاري العظام',
        description: 'خبرة 16 عاماً في جراحة العظام والمفاصل',
        image: '/images/doctors/doctor5.jpg',
        schedule: 'السبت - الخميس: 9:30 صباحاً - 5:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. ليلى عمر',
        specialty: 'استشارية العيون',
        description: 'خبرة 14 عاماً في طب وجراحة العيون',
        image: '/images/doctors/doctor6.jpg',
        schedule: 'السبت - الخميس: 10:30 صباحاً - 6:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. عمر خالد',
        specialty: 'استشاري الأنف والأذن',
        description: 'خبرة 13 عاماً في طب الأنف والأذن والحنجرة',
        image: '/images/doctors/doctor7.jpg',
        schedule: 'السبت - الخميس: 8:30 صباحاً - 4:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. نادية محمد',
        specialty: 'استشارية الجلدية',
        description: 'خبرة 11 عاماً في طب وجراحة الجلد',
        image: '/images/doctors/doctor8.jpg',
        schedule: 'السبت - الخميس: 11:30 صباحاً - 7:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. ياسر أحمد',
        specialty: 'استشاري الأسنان',
        description: 'خبرة 17 عاماً في طب وجراحة الفم والأسنان',
        image: '/images/doctors/doctor9.jpg',
        schedule: 'السبت - الخميس: 9:00 صباحاً - 5:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. رنا سعيد',
        specialty: 'استشارية المخ والأعصاب',
        description: 'خبرة 15 عاماً في طب المخ والأعصاب',
        image: '/images/doctors/doctor10.jpg',
        schedule: 'السبت - الخميس: 10:00 صباحاً - 6:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. علي حسن',
        specialty: 'استشاري الجهاز الهضمي',
        description: 'خبرة 16 عاماً في طب الجهاز الهضمي',
        image: '/images/doctors/doctor11.jpg',
        schedule: 'السبت - الخميس: 9:30 صباحاً - 5:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. منى أحمد',
        specialty: 'استشارية الغدد الصماء',
        description: 'خبرة 13 عاماً في طب الغدد الصماء',
        image: '/images/doctors/doctor12.jpg',
        schedule: 'السبت - الخميس: 11:00 صباحاً - 7:00 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. كريم محمد',
        specialty: 'استشاري المسالك البولية',
        description: 'خبرة 14 عاماً في طب وجراحة المسالك البولية',
        image: '/images/doctors/doctor13.jpg',
        schedule: 'السبت - الخميس: 8:30 صباحاً - 4:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    },
    {
        name: 'د. سلمى خالد',
        specialty: 'استشارية الطب النفسي',
        description: 'خبرة 12 عاماً في الطب النفسي',
        image: '/images/doctors/doctor14.jpg',
        schedule: 'السبت - الخميس: 10:30 صباحاً - 6:30 مساءً',
        social: {
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        }
    }
];

const Doctors: React.FC = () => {
    const [currentGroup, setCurrentGroup] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [doctorsPerGroup, setDoctorsPerGroup] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // lg screens
                setDoctorsPerGroup(5);
            } else if (window.innerWidth >= 768) { // md screens
                setDoctorsPerGroup(4);
            } else { // sm screens
                setDoctorsPerGroup(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalGroups = Math.ceil(doctors.length / doctorsPerGroup);

    const moveToGroup = (groupIndex: number) => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(${groupIndex * 100}%)`;
            setCurrentGroup(groupIndex);
        }
    };

    const nextGroup = () => {
        const nextIndex = (currentGroup + 1) % totalGroups;
        moveToGroup(nextIndex);
    };

    const prevGroup = () => {
        const prevIndex = (currentGroup - 1 + totalGroups) % totalGroups;
        moveToGroup(prevIndex);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
    };

    const startAutoPlay = () => {
        intervalRef.current = setInterval(nextGroup, 6000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (isPlaying) {
            startAutoPlay();
        }
        return () => {
            stopAutoPlay();
        };
    }, [isPlaying]);

    return (
        <section id="doctors" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                        أطباؤنا
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[var(--primary-color)] rounded-full"></div>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">
                        فريق من الأطباء المتخصصين ذوي الخبرة العالية في مختلف المجالات الطبية
                    </p>
                </div>
                
                <div className="relative w-full max-w-[1400px] mx-auto">
                    <div className="overflow-hidden">
                        <div 
                            ref={sliderRef}
                            className="flex transition-transform duration-500 ease-in-out"
                        >
                            {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                                <div 
                                    key={groupIndex}
                                    className="flex-none w-full px-3"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {doctors.slice(groupIndex * doctorsPerGroup, (groupIndex + 1) * doctorsPerGroup).map((doctor, index) => (
                                            <div 
                                                key={index}
                                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
                                            >
                                                <div className="relative h-40 overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                                    <img 
                                                        src={doctor.image} 
                                                        alt={doctor.name}
                                                        className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
                                                    />
                                                </div>
                                                <div className="p-4 text-center">
                                                    <h3 className="text-lg font-bold text-[var(--primary-color)] mb-1 text-center">{doctor.name}</h3>
                                                    <p className="text-gray-700 font-semibold mb-1 text-center text-sm">{doctor.specialty}</p>
                                                    <p className="text-gray-500 text-xs mb-2 text-center leading-relaxed">{doctor.description}</p>
                                                    <div className="flex items-center justify-center space-x-2 space-x-reverse mb-3 text-gray-600">
                                                        <i className="fas fa-clock text-[var(--primary-color)] text-xs"></i>
                                                        <span className="text-xs">{doctor.schedule}</span>
                                                    </div>
                                                    <div className="flex justify-center space-x-3 space-x-reverse">
                                                        <a href={doctor.social.facebook} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110">
                                                            <i className="fab fa-facebook text-lg"></i>
                                                        </a>
                                                        <a href={doctor.social.twitter} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110">
                                                            <i className="fab fa-twitter text-lg"></i>
                                                        </a>
                                                        <a href={doctor.social.linkedin} className="text-gray-400 hover:text-[var(--primary-color)] transition-colors duration-300 transform hover:scale-110">
                                                            <i className="fab fa-linkedin text-lg"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* أزرار التنقل */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
                        <button 
                            onClick={prevGroup}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={nextGroup}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    {/* شريط التحكم */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-[300px] flex items-center space-x-4 space-x-reverse">
                        <button 
                            onClick={togglePlay}
                            className="w-10 h-10 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors duration-300"
                        >
                            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                        </button>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-[var(--primary-color)] transition-all duration-500"
                                style={{ width: `${((currentGroup + 1) / totalGroups) * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                            {currentGroup + 1} / {totalGroups}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors; 