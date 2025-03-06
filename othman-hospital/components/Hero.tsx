'use client';

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            {/* خلفية متحركة */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] opacity-90">
                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
            </div>

            {/* المحتوى */}
            <div className="relative container mx-auto px-4 h-screen flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* النص */}
                    <div className="text-white text-right">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            مجمع العثمان الطبي
                            <span className="block text-2xl md:text-3xl mt-2">الوقفي الخيري</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            نقدم رعاية صحية عالية الجودة في إطار الوقف الخيري لخدمة المجتمع
                        </p>
                        <div className="flex gap-4 justify-end">
                            <a href="#contact" className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                                تواصل معنا
                            </a>
                            <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[var(--primary-color)] transition-all">
                                خدماتنا
                            </a>
                        </div>
                    </div>

                    {/* الصورة */}
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="absolute -inset-5 bg-white rounded-2xl opacity-20 animate-pulse"></div>
                            <img 
                                src="/images/hero-image.jpg" 
                                alt="مجمع العثمان الطبي" 
                                className="relative rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* شريط الإحصائيات */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-sm py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">50+</div>
                            <div className="text-sm opacity-80">طبيب متخصص</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">1000+</div>
                            <div className="text-sm opacity-80">مريض شهرياً</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <div className="text-sm opacity-80">خدمة طوارئ</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">15+</div>
                            <div className="text-sm opacity-80">تخصص طبي</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 