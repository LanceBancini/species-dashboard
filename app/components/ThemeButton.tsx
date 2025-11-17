'use client';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ThemeConfig } from '../config/themes';
import { getThemes, popoverStyles } from '../config/theme-loader';

interface ThemeButtonProps {
  onThemeSelect?: (theme: ThemeConfig) => void;
  currentTheme?: ThemeConfig; // ✅ Aktuelles Theme als Prop
}

export default function ThemeButton({ onThemeSelect, currentTheme }: ThemeButtonProps) {
  const themes = getThemes();

  return (
    <Popover className='relative inline-block'>
      {(
        { close } // ✅ close Funktion aus Headless UI
      ) => (
        <>
          <PopoverButton className={popoverStyles.button}>Theme</PopoverButton>

          <PopoverPanel anchor='bottom end' transition className={`${popoverStyles.panel} transform origin-top opacity-90`}>
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={(e) => {
                  e.stopPropagation();
                  onThemeSelect?.(theme);
                  // setTimeout(() => close(), 150);
                  close(); // ✅ Panel nach Auswahl schließen
                }}
                className={
                  currentTheme?.name === theme.name
                    ? popoverStyles.activeListItem // ✅ Nur activeListItem
                    : popoverStyles.listItem // ✅ Nur listItem
                }>
                {theme.name}
              </button>
            ))}
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
