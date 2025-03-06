'use client';

import { Cairo } from 'next/font/google';
import './globals.css';
import { useState, useEffect } from 'react';
import ThemeSelector from '../components/ThemeSelector';
import { themes } from '../styles/themes';

const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme: string) => {
    const themeColors = themes[theme as keyof typeof themes];
    document.documentElement.style.setProperty('--primary-color', themeColors.primary);
    document.documentElement.style.setProperty('--secondary-color', themeColors.secondary);
    document.documentElement.style.setProperty('--background-color', themeColors.background);
    document.documentElement.style.setProperty('--text-color', themeColors.text);
    document.documentElement.style.setProperty('--accent-color', themeColors.accent);
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={cairo.className}>
        {children}
        <ThemeSelector onThemeChange={handleThemeChange} currentTheme={currentTheme} />
      </body>
    </html>
  );
} 