import React from 'react'

import { Image } from '../utils/getGifs';

type GifGridItemProps = {
  image: Image
}

export function GifGridItem({ image }: GifGridItemProps) {
  return (
    <div className={'card animate__animated animate__fadeIn'}>
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  )
}
