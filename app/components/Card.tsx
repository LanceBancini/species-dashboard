import React from 'react';
import { SpeciesCount } from './ISpeciesCount';
import { AnimatedCounter } from './AnimatedCounter';
import Badge from './Badge';
import { ThemeConfig } from '../config/themes';

interface CardProps {
  category: SpeciesCount;
  index: number;
  categoryAnimationDuration: number;
  delayBetweenCategories: number;
  theme: ThemeConfig;
}

export default function Card({ category, index, categoryAnimationDuration, delayBetweenCategories, theme }: CardProps) {
  return (
    <div className={`border rounded-lg ${theme.transitions.hover}  ${theme.card.borderColour} p-5 flex justify-between items-start  ${theme.transitions.element}  ${theme.card.bgColour}`}>
      <div className='flex-2'>
        <h3 className={`font-semibold text-md ${theme.card.textColour} ${theme.transitions.element}`}>{category.iucn_category_description}</h3>
        <hr className='border-t border-stone-800/30 my-2 shadow-xl' />
        <p className={`my-3 text-4xl font-bold mt-2 font-sans text-shadow-lg/30  ${theme.animatedCounter.primary}`}>
          <span className={theme.transitions.element}>
            <AnimatedCounter value={category.iucn_header_data.total_count} duration={categoryAnimationDuration} delay={index * delayBetweenCategories} />
          </span>
          <span className={`font-bold text-sm text-shadow-none opacity-50 ${theme.card.textColour} ${theme.transitions.element}`}> Species</span>
        </p>
        <p className={`text-sm mt-1 ${theme.card.textColour} ${theme.transitions.element}`}>
          <span className='opacity-50'>Code:</span>
          <span className={`font-bold  ${theme.card.textColour} ${theme.transitions.element}`}> {category.iucn_category_code}</span>
        </p>
        {category.iucn_header_data.total_pages > 0 && (
          <p className={`text-sm ${theme.card.textColour} ${theme.transitions.element}`}>
            <span className='opacity-50'>Pages:</span> <span className={`font-bold text-md ${theme.transitions.element} ${theme.card.textColour}`}>{category.iucn_header_data.total_pages} </span>
          </p>
        )}
        <p className={`text-sm flex items-center justify-center mt-5  opacity-50 ${theme.card.textColour} ${theme.transitions.element}`}>
          {category.iucn_header_data.date && <span className={`text-xs ${theme.transitions.element}`}>As of: {category.iucn_header_data.date}</span>}
        </p>
      </div>
      <Badge number={index + 1} className='inset-shadow-sm inset-shadow-zinc-950' />
    </div>
  );
}
