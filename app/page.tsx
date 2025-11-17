'use client';
import React, { useState, useEffect } from 'react';
import { SpeciesCount } from './components/ISpeciesCount';
import { AnimatedCounter } from './components/AnimatedCounter';

import Card from './components/Card';
import ThemeButton from './components/ThemeButton';
import { ThemeConfig } from './config/themes';
import { getDefaultTheme, getThemeByName } from './config/theme-loader';

export default function Home() {
  interface IUCNApiResponse {
    summary: {
      my_total_count: number;
      category_count: number;
      validation: {
        total_count_match: boolean;
      };
    };
    counts_per_category: SpeciesCount[];
    metadata: {
      data_source: string;
      generated_at: string;
    };
  }

  const [data, setData] = useState<IUCNApiResponse | null>(null);
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(getDefaultTheme());
  const [isLoading, setIsLoading] = useState(true);

  // Theme aus Local Storage laden oder Dark als Standard
  useEffect(() => {
    const savedThemeName = localStorage.getItem('themeName');
    if (savedThemeName) {
      const savedTheme = getThemeByName(savedThemeName);
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      }
    }
    setIsLoading(false);
  }, []);

  // Theme im Local Storage speichern bei Änderung
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('themeName', currentTheme.name);
    }
  }, [currentTheme, isLoading]);

  // Daten laden
  useEffect(() => {
    const loadData = async () => {
      try {
        const dataModule = await import('../src/data/iucn-data.json');
        setData(dataModule.default);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  const handleThemeSelect = (theme: ThemeConfig) => {
    setCurrentTheme(theme);
  };

  if (!data || isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${getDefaultTheme().page.bgColour}`}>
        <div className={`text-xl ${getDefaultTheme().page.textColour}`}>Lade Daten...</div>
      </div>
    );
  }

  const totalCategories = data.counts_per_category.filter((category: SpeciesCount) => category.iucn_header_data.total_count > 0).length;
  const categoryAnimationDuration = 600;
  const delayBetweenCategories = 400;
  const totalAnimationTime = (totalCategories - 1) * delayBetweenCategories + categoryAnimationDuration;

  return (
    <div className={`min-h-screen p-8  ${currentTheme.transitions.page} ${currentTheme.page.bgColour} ${currentTheme.page.textColour} `}>
      {/* Header */}

      <header className='mb-8 flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold font-sans'>
            Threatened Species<span className='text-lg opacity-70'> | Dashboard...</span>
          </h1>
        </div>
        <ThemeButton onThemeSelect={handleThemeSelect} currentTheme={currentTheme} />
      </header>

      {/* Summary */}
      <div className={`rounded-lg shadow-md hover:shadow-xl p-6 mb-8 ${currentTheme.transitions.element} ${currentTheme.summary.bgColour} `}>
        <h2 className={`text-xl font-semibold mb-4 text-center opacity-80 ${currentTheme.summary.textColour} ${currentTheme.transitions.element}`}>Summary</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-sans'>
          <div className='text-center'>
            <p className={`text-6xl font-bold animate-pulse ${currentTheme.animatedCounter.primary} ${currentTheme.transitions.element}`}>
              <AnimatedCounter value={data.summary.my_total_count} duration={totalAnimationTime} />
            </p>
            <p className={`opacity-70 ${currentTheme.summary.textColour} ${currentTheme.transitions.element}`}>Threatened Species Total</p>
          </div>
          <div className='text-center'>
            <p className={`text-2xl font-bold ${currentTheme.transitions.element} ${currentTheme.animatedCounter.accent}`}>{data.counts_per_category.filter((c: SpeciesCount) => c.iucn_header_data.total_count > 0).length}</p>
            <p className={`opacity-70 ${currentTheme.summary.textColour} ${currentTheme.transitions.element}`}>
              Active Categories
              <span className={`opacity-50 ${currentTheme.summary.textColour} ${currentTheme.transitions.element} block`}>(of {data.summary.category_count} total)</span>
            </p>
          </div>
          <div className='text-center'>
            <p className={`text-2xl font-bold ${currentTheme.animatedCounter.accent} ${currentTheme.transitions.element} ${data.summary.validation.total_count_match ? currentTheme.animatedCounter.accent : `opacity-60 ${currentTheme.transitions.element}`}`}>
              {data.summary.validation.total_count_match ? '✓ Match' : '✗ No Match'}
            </p>
            <p className={`opacity-70 ${currentTheme.summary.textColour} ${currentTheme.transitions.element}`}>Validation</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className={`rounded-lg shadow p-6 ${currentTheme.transitions.element} ${currentTheme.summary.bgColour}`}>
        <h2 className='text-xl font-semibold mb-4 opacity-80'>Threat Categories:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-6 '>
          {data.counts_per_category
            .filter((category: SpeciesCount) => category.iucn_header_data.total_count > 0)
            .map((category: SpeciesCount, index: number) => (
              <div key={category.iucn_category_code}>
                <Card category={category} index={index} categoryAnimationDuration={categoryAnimationDuration} delayBetweenCategories={delayBetweenCategories} theme={currentTheme} />
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={`mt-8 p-6 text-center rounded-lg ${currentTheme.transitions.element} ${currentTheme.summary.bgColour}`}>
        <p className='text-xs opacity-30'>Data source:</p>
        <p className='text-sm opacity-80 text-neutral-200'>{data.metadata.data_source}</p>
        <span className='text-xs opacity-30 text-neutral-300'>Generated:</span>
        <p className='text-xs opacity-60'>{new Date(data.metadata.generated_at).toLocaleString('de-DE')}</p>
        <p className='text-xs opacity-30 mt-2'>Current Theme: {currentTheme.name}</p>
      </footer>
    </div>
  );
}
