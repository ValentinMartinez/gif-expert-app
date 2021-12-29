import { useEffect, useState } from 'react'

import { getGifs, Image } from '../utils/getGifs';

type UseFetchGifsState = {
  data: Image[],
  loading: boolean
}

export function useFetchGifs (category: string) {
  const [gifs, setGifs] = useState<UseFetchGifsState>({
    data: [], loading: true
  });

  useEffect(() => {
    getGifs(category)
      .then(imgs => {
        setGifs({
          data: imgs,
          loading: false,
        });
      });
  }, []);

  return gifs;
}