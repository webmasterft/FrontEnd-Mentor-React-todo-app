import React from 'react';
import MoonIcon from './icons/MoonIcon.jsx';

const Header = () => {
  return (
    <header className="pt-[48px] md:pt-[70px]">
      <div className="flex flex-row justify-between">
        <h1 className="uppercase font-bold text-white text-3xl md:text-text-4xl tracking-[15px]">
          Todo
        </h1>
        <button className="shrink-0">
          <MoonIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
