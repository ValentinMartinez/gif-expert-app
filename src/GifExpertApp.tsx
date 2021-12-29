import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp () {
  const [categories, setCategories] = useState<string[]>(['Samurai X']);

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        { categories.map(cat => <GifGrid key={cat} category={cat} />) }
      </ol>

    </>
  );
}