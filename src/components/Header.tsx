import { Brain } from "phosphor-react";
import { useState } from "react";

interface MenuItem {
  label: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu () {
    setIsMenuOpen(!isMenuOpen)
  } 
  return (
    <header className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Stock Website</h1>
        <button
          className="block sm:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>
        <nav className={`sm:flex ${isMenuOpen ? "block" : "hidden"}` }>
          <ul className="flex gap-4">
            {menuItems.map((menuItem, index) => (
              <li className="hover:text-gray-100 focus:outline-none focus:text-gray-100 cursor-pointer" key={index}>
                {menuItem.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
