'use client';

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* معلومات التواصل */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[var(--primary-color)]">معلومات التواصل</h3>
                        <div className="space-y-4">
                            <p className="flex items-center space-x-3 space-x-reverse">
                                <i className="fas fa-map-marker-alt text-[var(--primary-color)]"></i>
                                <span>دمشق ساحة الميسات مجمع العثمان الطبي</span>
                            </p>
                            <p className="flex items-center space-x-3 space-x-reverse">
                                <i className="fas fa-phone text-[var(--primary-color)]"></i>
                                <span>+963 11 1234567</span>
                            </p>
                            <p className="flex items-center space-x-3 space-x-reverse">
                                <i className="fas fa-envelope text-[var(--primary-color)]"></i>
                                <span>info@othmanhospital.com</span>
                            </p>
                        </div>
                    </div>

                    {/* ساعات العمل */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[var(--primary-color)]">ساعات العمل</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>السبت - الخميس</span>
                                <span className="text-gray-400">8:00 صباحاً - 8:00 مساءً</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>الجمعة</span>
                                <span className="text-gray-400">مغلق</span>
                            </div>
                        </div>
                    </div>

                    {/* روابط التواصل الاجتماعي */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-[var(--primary-color)]">تابعنا</h3>
                        <div className="flex space-x-4 space-x-reverse">
                            <a href="#" className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* حقوق النشر */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">
                        جميع الحقوق محفوظة © {new Date().getFullYear()} مجمع العثمان الطبي الوقفي الخيري
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 