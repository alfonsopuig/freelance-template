import React, { useState } from 'react';

import Link from 'next/link';

const NavLinks = [
  {
    name: 'About Us',
    url: 'about',
  },
  {
    name: 'Services',
    url: 'services',
  },
  {
    name: 'Portfolio',
    url: 'portfolio',
  },
  {
    name: 'Contact',
    url: 'contact',
  },
];

function MobileNav({ open, setOpen }) {
  return (
    <nav
      className={`fixed top-0 left-0 z-10 flex h-screen w-full transform bg-white bg-opacity-100 p-10 pt-24 text-black transition-all delay-100 duration-300 ${
        open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      } items-center`}
    >
      <ul className="flex w-full flex-col items-center uppercase">
        {NavLinks.map((link) => (
          <li className="nav-li py-2" key={link.name}>
            <Link
              href={link.url}
              className="nav-link font-medium"
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MobileNav open={open} setOpen={setOpen} />
      <header className="fixed z-20 w-full bg-white py-2 md:py-7">
        <div className="m-auto flex w-4/5 flex-wrap items-center justify-between">
          <div className="flex-wrap">
            <Link href="/" className="text-xl font-extrabold uppercase">
              Freelancer
            </Link>
          </div>
          <nav className="hidden flex-wrap justify-center self-center md:block">
            <div className="flex flex-col flex-nowrap justify-center">
              <ul className="flex items-center justify-between gap-9 font-medium uppercase">
                {NavLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="group text-black transition duration-300 hover:text-gray-500">
                      {link.name}
                      <span className="block h-0.5 max-w-0 bg-gray-500 transition-all duration-500 group-hover:max-w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <button
            className="relative top-0 right-0 z-20 flex h-10 w-10 text-black focus:outline-none lg:hidden"
            onClick={() => setOpen(!open)} aria-label="Menu"
          >
            <div className="absolute left-1/2 top-1/2 w-5 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                className={`absolute h-0.5 w-5 transform bg-black transition duration-300 ease-in-out ${
                  open ? 'rotate-45 delay-200' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 transform bg-black transition-all duration-200 ease-in-out ${
                  open ? 'w-0 opacity-50' : 'w-5 opacity-100 delay-200'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 transform bg-black transition duration-300 ease-in-out ${
                  open ? '-rotate-45 delay-200' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
