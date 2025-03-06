'use client';

import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                        اتصل بنا
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[var(--primary-color)]"></div>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو موعد
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* معلومات الاتصال */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">معلومات الاتصال</h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                                    <i className="fas fa-map-marker-alt text-xl text-[var(--primary-color)]"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">العنوان</h4>
                                    <p className="text-gray-600">دمشق ساحة الميسات مجمع العثمان الطبي</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                                    <i className="fas fa-phone text-xl text-[var(--primary-color)]"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">الهاتف</h4>
                                    <p className="text-gray-600">+963 11 1234567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                                    <i className="fas fa-envelope text-xl text-[var(--primary-color)]"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">البريد الإلكتروني</h4>
                                    <p className="text-gray-600">info@othmanhospital.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-12 h-12 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                                    <i className="fas fa-clock text-xl text-[var(--primary-color)]"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">ساعات العمل</h4>
                                    <p className="text-gray-600">السبت - الخميس: 8:00 صباحاً - 8:00 مساءً</p>
                                    <p className="text-gray-600">الجمعة: مغلق</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* الخريطة */}
                    <div className="bg-white p-4 rounded-xl shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1663.0079488292324!2d36.2949029654623!3d33.526972294898016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e73d1f946dcb%3A0xf09e537697354d8b!2z2YXYrNmF2Lkg2KfZhNi52KvZhdin2YYg2KfZhNi32KjZiiDYp9mE2K7Zitix2Yo!5e0!3m2!1sar!2s!4v1741213969706!5m2!1sar!2s" 
                            width="100%" 
                            height="300" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>

                    {/* نموذج الاتصال */}
                    <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-center text-[var(--primary-color)]">أرسل رسالة</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">الاسم الكامل</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-2">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">الرسالة</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--primary-color)] transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg hover:bg-[var(--secondary-color)] transition-colors font-bold"
                            >
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 