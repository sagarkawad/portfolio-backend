import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { Link } from 'react-router-dom';


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  disableBlue?: boolean;
  setIsMenuOpen?: (arg0: boolean) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  disableBlue = false, 
  setIsMenuOpen = null, 
}) => {
  const scrollTo = useScrollTo();
  const targetId = href.replace('#', '');

  const handleClick = () => {
    scrollTo(targetId);
    if (setIsMenuOpen !== null) {
    setIsMenuOpen(false);
    }
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={`relative group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {!disableBlue && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
      )}
    </Link>
  );
};