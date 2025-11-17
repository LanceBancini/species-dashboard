export interface ThemeConfig {
  name: string;
  transitions: {
    page: string;
    element: string;
    hover: string;
  };
  page: {
    bgColour: string;
    textColour: string;
  };
  summary: {
    bgColour: string;
    textColour: string;
  };
  card: {
    bgColour: string;
    textColour: string;
    borderColour: string;
  };
  animatedCounter: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// ✅ ZENTRALER Popover-Style (für alle Themes gleich)
export const popoverStyles = {
  button:
    'shadow-md shadow-stone-900/50 cursor-pointer text-stone-400 hover:text-stone-300 px-5 py-2 px-5 bg-stone-800 border border-stone-400 rounded-xl shadow-xl hover:bg-stone-600 hover:border-stone-400 data-[active]:bg-stone-950 transition-all duration-300 focus:ring-stone-200 p-5 ',
  //   panel: ' w-60 absolute grid mt-2 bg-slate-100/90 shadow-xl rounded-xl border border-stone-300 p-2 origin-top-right transition-all duration-500 data-[closed]:scale-95 data-[closed]:opacity-0 data-[open]:scale-100 data-[open]:opacity-100 ',
  panel:
    ' shadow-xl  shadow-stone-900/90 w-60 grid mt-4 bg-stone-950/90 shadow-xl rounded-xl border border-stone-500 p-5 transform transition-all duration-500 ease-out origin-top-right data-[closed]:scale-20 data-[closed]:opacity-0 starting:open:opacity-0   starting:open:scale-0 ',
  // listItem: 'my-1 text-left  px-4 p-4 hover:bg-stone-700/50 hover:text-red-200 rounded-lg data-[focus]:text-stone-200'
  // ✅ Normales List-Item
  listItem: 'text-left  cursor-pointer px-2 p-2 my-3  rounded-lg ring-1 ring-stone-200/50 transition-all duration-200 text-stone-400 bg-stone-700/80 hover:bg-stone-950/90 hover:text-stone-500 hover:font-bold',

  // ✅ Aktives List-Item
  activeListItem: 'text-left px-2 p-2 my-3 rounded-lg ring-2 ring-stone-200/30 transition-all duration-200 text-stone-900 bg-stone-400 font-bold'
};

export const themes: ThemeConfig[] = [
  {
    name: 'Moon',
    transitions: {
      page: 'transition-colors duration-1000 ease-in-out',
      element: 'transition-all duration-1000 ease-in-out',
      hover: 'transition-all duration-200 hover:ease-in-out hover:scale-105 hover:shadow-xl  hover:shadow-stone-900/50'
    },
    page: {
      bgColour: 'bg-linear-45 from-stone-950 to-stone-600',
      textColour: 'text-stone-500'
    },
    summary: {
      bgColour: ' bg-stone-800',
      textColour: 'text-stone-400'
    },
    card: {
      bgColour: 'bg-stone-700',
      textColour: 'text-stone-500',
      borderColour: 'border-stone-950/80'
    },
    animatedCounter: {
      primary: 'text-red-400/90 text-shadow-lg/50 ',
      secondary: 'text-stone-400',
      accent: 'text-teal-900'
    }
  },
  {
    name: 'Sunset',
    transitions: {
      page: 'transition-colors duration-1000 ease-in-out',
      element: 'transition-all duration-1000 ease-in-out',
      hover: 'transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl  hover:shadow-stone-900/50'
    },
    page: {
      bgColour: ' bg-linear-45 from-amber-950 to-amber-300',
      textColour: 'text-neutral-300'
    },
    summary: {
      bgColour: ' bg-amber-600',
      textColour: 'text-neutral-200'
    },
    card: {
      bgColour: 'bg-amber-300/50',
      textColour: 'text-yellow-900',
      borderColour: 'border-stone-950/80'
    },
    animatedCounter: {
      primary: 'text-neutral-200 text-shadow-lg/50',
      secondary: 'text-amber-400',
      accent: 'text-teal-900'
    }
  },
  {
    name: 'Ocean',
    transitions: {
      page: 'transition-colors duration-1000 ease-in-out',
      element: 'transition-all duration-1000 ease-in-out',
      hover: 'transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl  hover:shadow-stone-900/50'
    },
    page: {
      bgColour: ' bg-linear-45 from-zinc-950 to-blue-600',
      textColour: 'text-blue-200'
    },
    summary: {
      bgColour: ' bg-blue-800',
      textColour: ' text-neutral-100'
    },
    card: {
      bgColour: ' bg-blue-500',
      textColour: 'text-blue-100',
      borderColour: 'border-stone-950/80'
    },
    animatedCounter: {
      primary: ' text-blue-100 text-shadow-lg/50',
      secondary: 'text-blue-300',
      accent: 'text-teal-600'
    }
  }
] as const;
