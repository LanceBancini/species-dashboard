import Badge from './Badge';

import MyIcon from './MyIcon';
import SequentialIcons from './SequentialIcons';

export default function TailwindGrid() {
  return (
    <>
      <div className='  p-8  absolute z-10 w-full h-screen'>
        {/* Header */}
        <header className='flex p-4 mb-4  rounded-lg  text-red-500  bg-stone-800 rounded-lg transition-colors duration-1000 ease-in-out'>
          <h1 className='text-3xl font-bold text-red-500 flex '>
            <span
              className='flex items-center justify-center  mr-3 rounded-full  ring-3 ring-stone-500/30 ring:m-3 w-15 h-15 bg-radial-[at_22%_15%] from-red-400 from-10%  via-red-500 via-80% to-zinc-950 to-91% inset-shadow-sm inset-shadow-zinc-950 shadow-md shadow-zinc-950 '
              style={{ animation: 'pulse 3s ease-in-out' }}>
              <SequentialIcons
                icons={['bell-electric', 'cat', 'bird', 'vegan', 'dog', 'squirrel', 'bug', 'paw-print', 'rabbit', 'worm', 'clover', 'fish', 'sprout', 'leaf', 'panda', 'clover', 'snail', 'turtle']} // Kein TypeScript-Fehler mehr
                interval={3000}
                fadeDuration={1000}
                strokeWidth={1.8}
                size={38}
                className=' text-stone-100/90'
              />
            </span>
            <div className=' text-red-700 text-3xl self-center text-stone-400'>
              Playground<span className='flex text-red-700 text-sm self-center-safe text-stone-500 float-left'>Dashboard...</span>
            </div>
          </h1>
        </header>
        {/* Zeile 1 */}
        <div className=' flex gap-2 justify-between items-start  mb-4'>
          <div className='flex-2 rounded-lg  bg-stone-400 p-4 font-bold text-red-500'>01</div>
          <div className='flex-2 rounded-lg  bg-stone-400 p-4 font-bold'>02</div>
          <div className='flex-2 rounded-lg  bg-stone-400 p-4 font-bold '>
            <div className='grid'>
              {/* Badge  */}
              <Badge number={3} className='justify-self-center inset-shadow-sm inset-shadow-zinc-950' />
            </div>
          </div>
        </div>
        {/* Zeile 2  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-4 '>
          <div className=' rounded-lg   align-top p-4 m-4 '>
            <p className=' text-center font-bold'>12</p>
            <div className=' flex rounded-lg grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 bg-red-100'>
              <div className='bg-stone-400 rounded-lg p-4'>
                <p className='text-center'>1/1</p>
              </div>

              <div className=' bg-stone-400 rounded-lg p-4 '>
                <p className='text-center'>1/2</p>
              </div>
              <div className=' bg-stone-400 rounded-lg p-4'>
                <p className='text-center'>1/3</p>
              </div>
              <div className=' bg-stone-400 rounded-lg p-4'>
                <p className='text-center '>1/4</p>
              </div>
            </div>
          </div>

          <div className=' flex-1 '>
            <div className='flex-1 bg-stone-100 rounded-lg p-4 m-4 bg-red-500'>
              <p className='text-center font-bold '>2</p>

              <div className='flex-1 bg-stone-400 rounded-lg p-4 mb-2'>
                <p className='text-center'>2/1</p>
              </div>

              <div className='flex-1 bg-stone-400 rounded-lg p-4 mb-2'>
                <p className='text-center'>2/2</p>
              </div>
            </div>
          </div>
          <div className=' flex-1 '>
            <div className='flex-1 bg-stone-300 rounded-lg p-4'>
              <p className='text-center font-bold'>3</p>
            </div>
          </div>
          <div className=' flex-1'>
            <div className='flex-1 bg-stone-300 rounded-lg p-4'>
              <p className='text-center font-bold'>4</p>
            </div>
          </div>
        </div>
        {/* Footer 2*/}
        <footer className='flex-1'>
          <div className='flex-1 bg-stone-800 rounded-lg p-4  text-stone-500'>
            <p className='text-center'>Footer</p>
          </div>
        </footer>
      </div>
    </>
  );
}
