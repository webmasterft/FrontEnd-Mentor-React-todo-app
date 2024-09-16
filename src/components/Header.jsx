import React, { useState, useEffect } from 'react';
import IconMoon from './icons/IconMoon.jsx';
import IconSun from './icons/IconSun.jsx';

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkmode, setDarkMode] = useState(inicialStateDarkMode);
  useEffect(() => {
    darkmode
      ? (document.documentElement.classList.add('dark'),
        localStorage.setItem('theme', 'dark'))
      : (document.documentElement.classList.remove('dark'),
        localStorage.setItem('theme', 'light'));
  }, [darkmode]);
  return (
    <header className="pt-[48px] md:pt-[70px]">
      <div className="flex flex-row justify-between">
        <h1 className="uppercase font-bold text-white text-3xl md:text-text-4xl tracking-[15px]">
          Todo
        </h1>
        <button className="shrink-0" onClick={() => setDarkMode(!darkmode)}>
          {darkmode ? <IconMoon /> : <IconSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
