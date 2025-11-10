import React from 'react';
import { SpeciesCount } from './ISpeciesCount';
import { AnimatedCounter } from './AnimatedCounter';
import Badge from './Badge';

interface CardProps {
  category: SpeciesCount;
  index: number;
  categoryAnimationDuration: number;
  delayBetweenCategories: number;
}

export default function Card({ category, index, categoryAnimationDuration, delayBetweenCategories }: CardProps) {
  return (
    <div className='border rounded-lg p-5 flex justify-between items-start  hover:animate-pulse hover:shadow-xl  bg-stone-700 '>
      {/* Karten-Inhalt (links) */}
      <div className='flex-2'>
        <h3 className='font-semibold text-lg text-stone-400'>{category.iucn_category_description}</h3>
        <hr className='border-t border-stone-500/30 my-2 shadow-xl' />
        <p className='text-2xl font-bold text-red-400/90 mt-2 font-sans text-shadow-lg/30 '>
          {/* prettier-ignore */}
          <AnimatedCounter
            value={category.iucn_header_data.total_count}
            duration={categoryAnimationDuration}
            delay={index * delayBetweenCategories}
            />
          <span className='font-bold text-stone-600 text-sm text-shadow-none'> Species</span>
        </p>
        <p className='text-sm text-stone-500 mt-1'>
          Code:<span className='font-bold text-stone-300'> {category.iucn_category_code}</span>
        </p>
        {category.iucn_header_data.total_pages > 0 && (
          <p className='text-sm text-stone-500 '>
            Pages: <span className='font-bold text-stone-400'>{category.iucn_header_data.total_pages} </span>
          </p>
        )}
        <p className='text-sm flex items-center justify-center mt-5 text-stone-600'>{category.iucn_header_data.date && <span className='text-xs'>As of: {category.iucn_header_data.date}</span>}</p>
      </div>
      {/* Badge (rechts) */}
      <Badge number={index + 1} className='inset-shadow-sm inset-shadow-zinc-950' />
    </div>
  );
}
