import { Brain, List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full mx-auto">
      <div className="flex items-center justify-between py-4  w-full">
        <div className="flex items-center gap-2 w-full">
          <h1 className="text-2xl font-bold">Stock Mind</h1>
          <Brain size={32} color="#fe12f3" weight="duotone" />
        </div>

        <div className="hidden md:flex md:items-center md:ml-10">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-100"
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
