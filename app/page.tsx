import React from 'react';
import { SpeciesCount } from './components/ISpeciesCount';
import { AnimatedCounter } from './components/AnimatedCounter';

import Card from './components/Card';

/* async function getIucnData() {
  try {
    // Im Browser und auf dem Server relative URL verwenden
    const apiUrl =
      process.env.NODE_ENV === 'production'
        ? '/api/iucn' // Relative URL in Production
        : 'http://localhost:3000/api/iucn'; // Absolute URL in Development

    console.log('Fetching from:', apiUrl);

    const res = await fetch(apiUrl, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching IUCN data:', error);
    throw new Error('Failed to fetch IUCN data');
  }
} */

const loadData = async () => {
  const data = await import('../src/data/iucn-data.json');
  return data.default;
};

export default async function Home() {
  const data = await loadData();
  // Berechne die maximale Duration
  const totalCategories = data.counts_per_category.filter((category: SpeciesCount) => category.iucn_header_data.total_count > 0).length;
  const categoryAnimationDuration = 400; // Dauer pro Karte
  const delayBetweenCategories = 400; // Delay zwischen Karten
  const totalAnimationTime = (totalCategories - 1) * delayBetweenCategories + categoryAnimationDuration;

  return (
    <div className='min-h-screen  p-8 bg-stone-950 '>
      {/* Header */}
      <header className='mb-8'>
        <h1 className='text-3xl font-bold text-stone-500 font-sans'>
          Threatened Species<span className='text-stone-700 text-lg'> | Dashboard...</span>
        </h1>
      </header>
      {/* <TodoList surName='Marc' lastName='Isele' age={2} className={'bg-red-600 rounded-lg animate-pulse text-stone-400'} /> */}
      {/* Summary */}
      <div className='bg-stone-800 rounded-lg shadow-md hover:shadow-xl p-6 mb-8'>
        <h2 className='text-xl font-semibold mb-4 text-center text-stone-600'>Summary</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-sans'>
          <div className='text-center'>
            <p className='text-4xl font-bold text-red-400/90 text-shadow-lg/50 animate-pulse'>
              <AnimatedCounter
                value={data.summary.my_total_count}
                duration={totalAnimationTime} // ✅ Genau so lange wie alle Karten zusammen!
              />
            </p>
            <p className='text-stone-400'>Threatened Species Total</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl font-bold text-teal-900'>{data.counts_per_category.filter((c: SpeciesCount) => c.iucn_header_data.total_count > 0).length}</p>
            <p className='text-stone-500'>
              Active Categories
              <span className='text-xs text-stone-600 block'>(of {data.summary.category_count} total)</span>
            </p>
          </div>
          <div className='text-center'>
            <p className={`text-2xl font-bold ${data.summary.validation.total_count_match ? 'text-teal-900' : 'text-bg-sky-500/40'}`}>{data.summary.validation.total_count_match ? '✓ Match' : '✗ No Match'}</p>
            <p className='text-stone-600'>Validation</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className='bg-stone-800 rounded-lg shadow p-6 '>
        <h2 className='text-xl font-semibold mb-4 text-stone-600'>Threat Categories:</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data.counts_per_category
            .filter((category: SpeciesCount) => category.iucn_header_data.total_count > 0)
            .map((category: SpeciesCount, index: number) => (
              <div key={category.iucn_category_code}>
                {/*prettier-ignore*/}
                <Card
                  key={category.iucn_category_code}
                  category={category}
                  index={index}
                  categoryAnimationDuration={categoryAnimationDuration} 
                  delayBetweenCategories={delayBetweenCategories} />
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className='mb-8 p-6 text-center'>
        <p className='text-xs text-stone-700'>Data source:</p>
        <p className='text-sm text-stone-500'>{data.metadata.data_source}</p>
        <span className='text-xs text-stone-700'>Generated:</span>
        <p className='text-xs text-stone-600'>{new Date(data.metadata.generated_at).toLocaleString()}</p>
      </footer>
    </div>
  );
}
