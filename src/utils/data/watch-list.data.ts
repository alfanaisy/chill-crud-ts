export interface IWatchList {
  type: 'film' | 'series';
  id: number;
  title: string;
  rating: number;
  imageUrl: string;
  isLabeled?: 'premium' | 'new episode';
}

export const watchListData: IWatchList[] = [
  {
    type: 'film',
    id: 1,
    title: "Don't Look Up",
    rating: 8.7,
    imageUrl: 'https://i.ibb.co.com/4RBjT9r/thumbnail-l-1.png',
    isLabeled: 'premium',
  },
  {
    type: 'film',
    id: 2,
    title: 'Shazam: Fury of the God',
    rating: 7.9,
    imageUrl: 'https://i.ibb.co.com/xJ2Xpzf/thumbnail-l-2.png',
  },
  {
    type: 'series',
    id: 3,
    title: 'Blue Lock',
    rating: 6.5,
    imageUrl: 'https://i.ibb.co.com/h28TPb7/thumbnail-l-3.png',
    isLabeled: 'new episode',
  },
  {
    type: 'film',
    id: 4,
    title: 'A Man Called Otto',
    rating: 9.1,
    imageUrl: 'https://i.ibb.co.com/stkDV0L/thumbnail-l-4.png',
  },
  {
    type: 'series',
    id: 5,
    title: 'All of use are Dead',
    rating: 7.2,
    imageUrl: 'https://i.ibb.co.com/WDwSWFT/thumbnail-l-5.png',
  },
];
