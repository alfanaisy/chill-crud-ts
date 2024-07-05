export interface ICatalogue {
  type: 'film' | 'series';
  id: number;
  title: string;
  rating: number;
  imageUrl: string;
  isLabeled?: 'premium' | 'new episode';
}

export const watchListData: ICatalogue[] = [
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

export const todaysTop: ICatalogue[] = [
  {
    type: 'film',
    id: 11,
    title: 'Suzume',
    rating: 8.7,
    imageUrl: 'https://i.ibb.co.com/VCf6Fk5/thumbnail-p-1.png',
  },
  {
    type: 'film',
    id: 12,
    title: 'Jurassic World: Dominion',
    rating: 8.1,
    imageUrl: 'https://i.ibb.co.com/6mvsS7X/thumbnail-p-2.png',
  },
  {
    type: 'film',
    id: 13,
    title: 'Suzume',
    rating: 8.7,
    imageUrl: 'https://i.ibb.co.com/VCf6Fk5/thumbnail-p-1.png',
  },
  {
    type: 'film',
    id: 14,
    title: 'Jurassic World: Dominion',
    rating: 8.1,
    imageUrl: 'https://i.ibb.co.com/6mvsS7X/thumbnail-p-2.png',
  },
  {
    type: 'film',
    id: 15,
    title: 'Suzume',
    rating: 8.7,
    imageUrl: 'https://i.ibb.co.com/VCf6Fk5/thumbnail-p-1.png',
  },
  {
    type: 'film',
    id: 16,
    title: 'Jurassic World: Dominion',
    rating: 8.1,
    imageUrl: 'https://i.ibb.co.com/6mvsS7X/thumbnail-p-2.png',
  },
  {
    type: 'film',
    id: 15,
    title: 'Suzume',
    rating: 8.7,
    imageUrl: 'https://i.ibb.co.com/VCf6Fk5/thumbnail-p-1.png',
  },
  {
    type: 'film',
    id: 16,
    title: 'Jurassic World: Dominion',
    rating: 8.1,
    imageUrl: 'https://i.ibb.co.com/6mvsS7X/thumbnail-p-2.png',
  },
];
