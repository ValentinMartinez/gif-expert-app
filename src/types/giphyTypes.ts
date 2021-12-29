type Data = {
  id: string,
  title: string,
  images?: {
    downsized_medium: {
      url: string,
    }
  }
}

export type GiphyResponse = {
  data: Data[],
}