'use client';

import React, { useState } from 'react';
import { themes } from '../styles/themes';

type ThemeKey = keyof typeof themes;

const ThemeSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<ThemeKey>('default');

    const applyTheme = (themeKey: ThemeKey) => {
        const theme = themes[themeKey];
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--background-color', theme.background);
        document.documentElement.style.setProperty('--text-color', theme.text);
        document.documentElement.style.setProperty('--accent-color', theme.accent);
        setCurrentTheme(themeKey);
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <div className="relative">
                {/* زر الثيم الرئيسي */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                    <i className="fas fa-palette text-xl"></i>
                </button>

                {/* قائمة الثيمات */}
                {isOpen && (
                    <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-2 w-40">
                        <div className="space-y-2">
                            {Object.entries(themes).map(([key, theme]) => (
                                <button
                                    key={key}
                                    onClick={() => applyTheme(key as ThemeKey)}
                                    className={`w-full flex items-center space-x-2 space-x-reverse p-2 rounded transition-colors ${
                                        currentTheme === key ? 'bg-gray-100' : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div 
                                        className="w-6 h-6 rounded-full" 
                                        style={{ backgroundColor: theme.primary }}
                                    ></div>
                                    <span className="text-gray-700">
                                        {key === 'default' && 'الافتراضي'}
                                        {key === 'dark' && 'الوضع الليلي'}
                                        {key === 'green' && 'الأخضر'}
                                        {key === 'purple' && 'البنفسجي'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThemeSelector; 