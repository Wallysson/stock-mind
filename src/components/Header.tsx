import { Brain, List, X } from "phosphor-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  label: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full mx-auto">
      <div className="flex items-center justify-between py-8  w-full">
        <Link to={"/"}>
          <div className="flex items-center gap-2 w-full">
            <h1 className="text-3xl font-bold">Stock Mind</h1>
            <Brain size={32} color="#ec4899" weight="duotone" />
          </div>
        </Link>

        <div className="hidden md:flex md:items-center md:ml-10">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`px-3 py-2 rounded-md text-base font-medium hover:text-[#f4abcf] ${
                location.pathname === item.url ? "text-[#ec4899]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMenuOpen ? (
              <X size={32} className="h-6 w-6" />
            ) : (
              <List size={32} className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 fixed  top-0 left-0 right-0 bottom-0 z-20 flex flex-col items-center justify-center">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className="px-3 py-2 rounded-md text-2xl font-medium hover:text-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
