import { Brain, List } from "phosphor-react";
import { useState } from "react";
import { Listbox } from '@headlessui/react';

interface MenuItem {
  label: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
}

export function Header({ menuItems }: Props) {

  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);

  
  return (
    <header className="bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex direction-row gap-1 items-center">
          <h1 className="text-xl font-bold">StockMind</h1>
          <Brain size={32} color="#fe12f3" weight="duotone" />
        </div>
       
    <nav className="sm:flex">
          <Listbox value={selectedMenuItem} onChange={setSelectedMenuItem}>
            <Listbox.Button className="flex items-center gap-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-fuchsia-500">
              {selectedMenuItem.label}
              <List size={24} />
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-gray-500 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {menuItems.map((menuItem, index) => (
                <Listbox.Option
                  key={index}
                  value={menuItem}
                  className={({ active, selected }) =>
                    `${
                      active
                        ? "text-white bg-fuchsia-600"
                        : "text-gray-900"
                    }
                      ${
                        selected
                          ? "font-medium text-white bg-fuchsia-600"
                          : ""
                      }
                      cursor-default select-none relative py-2 pl-3 pr-9`
                  }
                >
                  {menuItem.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </nav>
      </div>
    </header>
  );
}
