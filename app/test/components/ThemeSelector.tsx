'use client';
import { useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

type ThemeName = 'light' | 'dark' | 'ocean';

interface Theme {
  label: string;
  bg: string;
  text: string;
}

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('light');

  const themes: Record<ThemeName, Theme> = {
    light: {
      label: '☀️ Sun',
      bg: 'bg-yellow-800',
      text: 'text-yellow-300'
    },
    dark: {
      label: '🌙 Dark',
      bg: 'bg-stone-800',
      text: 'text-stone-300'
    },
    ocean: {
      label: '🌊 Ocean',
      bg: 'bg-blue-800',
      text: 'text-indigo-300'
    }
  };

  const currentTheme = themes[selectedTheme];

  return (
    <div className={`p-6 min-h-screen transition-all duration-500 ease-in-out ${currentTheme.bg} ${currentTheme.text}`}>
      {/* Display mit Theme-Hintergrund und Transition */}
      <div className={`p-6 mb-6 border rounded-xl text-center transition-all duration-500 ease-in-out ${currentTheme.bg} ${currentTheme.text}`}>
        <h2 className='text-2xl font-bold mb-2'>Aktuelles Theme:</h2>
        <p className='text-xl font-semibold capitalize'>{selectedTheme}</p>
      </div>

      <div className='flex justify-center'>
        <Popover className='relative inline-block'>
          {({ close }) => (
            <>
              {/* Popover-Button mit Theme-Farbe und Transition */}
              <PopoverButton className={`px-6 py-3 rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:opacity-90 hover:scale-105 ${currentTheme.bg} ${currentTheme.text}`}>🎨 Theme auswählen</PopoverButton>

              <PopoverPanel anchor='bottom' transition className='w-56 transform origin-top-right transition-all duration-300 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0 data-[open]:scale-100 data-[open]:opacity-100'>
                <div className='bg-white shadow-xl rounded-xl border border-gray-200 p-2'>
                  {(Object.entries(themes) as [ThemeName, Theme][]).map(([themeName, theme]) => (
                    <button
                      key={themeName}
                      onClick={() => {
                        setSelectedTheme(themeName);
                        close();
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${selectedTheme === themeName ? `${theme.bg} ${theme.text} font-semibold` : 'text-gray-700 hover:bg-gray-100'}`}>
                      {theme.label}
                    </button>
                  ))}
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
      </div>

      {/* Beispiel Content mit Transition */}
      <div className={`mt-8 p-6 border rounded-xl transition-all duration-800 ease-in-out ${currentTheme.bg} ${currentTheme.text}`}>
        <h3 className='text-lg font-semibold mb-4'>Beispiel Content</h3>
        <p className='mb-4'>Diese Box ändert ihre Farben smooth mit dem Theme.</p>
        <button className={`px-4 py-2 rounded-lg transition-all duration-500 ease-in-out hover:opacity-90 ${currentTheme.bg} ${currentTheme.text}`}>Beispiel Button</button>
      </div>
    </div>
  );
}
