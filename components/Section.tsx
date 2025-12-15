import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light' | 'dark' | 'brand';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-brand-50',
    dark: 'bg-dark-900 text-white',
    brand: 'bg-brand-600 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default Section;