import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-full shadow-lg transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-500 focus:ring-brand-500 border border-transparent",
    secondary: "bg-brand-gold text-white hover:bg-yellow-600 focus:ring-yellow-500 border border-transparent",
    outline: "bg-transparent text-brand-600 border-2 border-brand-600 hover:bg-brand-50"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;