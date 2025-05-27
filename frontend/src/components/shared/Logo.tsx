import React from 'react';

const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <img 
    src="/logo.svg" 
    alt="Kanzariya Technology Logo"
    className={className}
  />
);

export default Logo;