//import { IClassProps } from './IClassName';
export interface NameProps {
  surName: string;
  lastName: string;
  age: number;
}

export default function Themes() {
  const themes = [
    {
      name: 'Dark',
      page: {
        bgColour: 'bg-stone-950'
      },
      summary: {
        bgColour: 'bg-stone-800'
      },
      card: {
        bgColour: 'bg-stone-700'
      }
    },
    {
      name: 'Sun',
      page: {
        bgColour: 'bg-amber-400'
      },
      summary: {
        bgColour: 'bg-stone-800'
      },
      card: {
        bgColour: 'bg-stone-700'
      }
    },
    {
      name: 'Ocean',
      page: {
        bgColour: 'bg-blue-500'
      },
      summary: {
        bgColour: 'bg-stone-800'
      },
      card: {
        bgColour: 'bg-stone-700'
      }
    }
  ];
  const myTheme = themes[1];

  return (
    <div className={myTheme.page.bgColour}>
      <h1>Theme: {myTheme.name}</h1>
    </div>
  );
}
