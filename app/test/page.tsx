import type { Metadata } from 'next';
import TailwindGrid from './components/TailwindGrid';
import HeadlessPopover from './components/HeadlessPopover';
import ThemeSelector from './components/ThemeSelector';
import Head from 'next/head';
import test from 'node:test';
import InteractiveHero from './components/InteractiveHero';

export const metadata = {
  title: 'Playground',
  description: 'Checking tghings out'
};

export default async function PlaygroundPage() {
  //console.log('🎯 Tailwind/test/page.tsx geladen...');
  return (
    <>
      <link rel='icon' key='head' href='./favicon-02.ico' sizes='any' />

      {/* <TailwindGrid /> */}
      <div className='fixed top-0 left-0 w-full h-full -z-10 bg-linear-45 from-blue-500 to-blue-800 inset-0'>
        <div className='relative z-10 flex items-center justify-center rounded-lg  bg-zinc-900 p-4 font-bold p-0 backdrop-blur-xs'>
          <div className=' text-center  text-6xl z-20 text-zinc-500/78 '>
            <p>Header</p>
          </div>
        </div>
        <TailwindGrid />
        <InteractiveHero />

        {/* <HeadlessPopover />
      <TailwindGrid /> */}
      </div>
    </>
  );

  //return <HeadlessPopover />;
  //return <ThemeSelector />;
}
