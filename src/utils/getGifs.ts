import { GiphyResponse } from "../types/giphyTypes";

export type Image = {
  id: string,
  title: string,
  url?: string,
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Tozi21LJaeilKiWHUAo1y2Lvq3R0119q`;
  const resp = await fetch(url);
  const { data }: GiphyResponse = await resp.json();

  const gifs = data.map((img): Image => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  });

  return gifs;
}