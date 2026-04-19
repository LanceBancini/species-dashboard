import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function Example() {
  const listStyle: string = 'px-4 py-2 text-stone-700 hover:bg-stone-300 hover:text-stone-800 rounded-lg';
  const panelStyle: string = 'flex flex-col w-56 mt-2 bg-white shadow-xl rounded-xl border border-stone-300 p-2 transition-all duration-600 ease-in-out transition-discrete ';
  const buttonStyle: string = 'px-4 py-2 bg-stone-300 border border-stone-300 rounded-xl shadow-xl hover:bg-stone-100 hover:border-stone-400 active:bg-stone-200 transition-all duration-300 focus:outline-none  focus:ring-stone-300 focus:ring-opacity-50';

  return (
    <Popover className='relative inline-block'>
      <PopoverButton className={buttonStyle}>Theme</PopoverButton>
      <PopoverPanel anchor='bottom' className={panelStyle}>
        <a className={listStyle} href='/analytics'>
          Moon
        </a>

        <a className={listStyle} href='/engagement'>
          Sun
        </a>
        <a className={listStyle} href='/security'>
          Ocen
        </a>
      </PopoverPanel>
    </Popover>
  );
}
