export interface ICatalogue {
  type: 'film' | 'series';
  id: number;
  title: string;
  rating: string;
  imageUrl: string;
  isLabeled?: 'premium' | 'new episode';
}

export const watchListData: ICatalogue[] = [
  {
    type: 'film',
    id: 1,
    title: "Don't Look Up",
    rating: '8.7',
    imageUrl: 'https://i.ibb.co.com/4RBjT9r/thumbnail-l-1.png',
    isLabeled: 'premium',
  },
  {
    type: 'film',
    id: 2,
    title: 'Shazam: Fury of the God',
    rating: '7.9',
    imageUrl: 'https://i.ibb.co.com/xJ2Xpzf/thumbnail-l-2.png',
  },
  {
    type: 'series',
    id: 3,
    title: 'Blue Lock',
    rating: '6.5',
    imageUrl: 'https://i.ibb.co.com/h28TPb7/thumbnail-l-3.png',
    isLabeled: 'new episode',
  },
  {
    type: 'film',
    id: 4,
    title: 'A Man Called Otto',
    rating: '9.1',
    imageUrl: 'https://i.ibb.co.com/stkDV0L/thumbnail-l-4.png',
  },
  {
    type: 'series',
    id: 5,
    title: 'All of use are Dead',
    rating: '7.2',
    imageUrl: 'https://i.ibb.co.com/WDwSWFT/thumbnail-l-5.png',
  },
];

export const todaysTop: ICatalogue[] = [
  {
    type: 'film',
    id: 11,
    title: 'Suzume',
    rating: '8.7',
    imageUrl: 'https://i.ibb.co.com/VCf6Fk5/thumbnail-p-1.png',
  },
  {
    type: 'film',
    id: 12,
    title: 'Jurassic World: Dominion',
    rating: '8.1',
    imageUrl: 'https://i.ibb.co.com/6mvsS7X/thumbnail-p-2.png',
    isLabeled: 'premium',
  },
  {
    type: 'film',
    id: 13,
    title: 'Sonic the Hedgehog 2',
    rating: '7.2',
    imageUrl: 'https://i.ibb.co.com/ZBTcnVP/thumbnail-p-3.png',
  },
  {
    type: 'film',
    id: 14,
    title: 'Big Hero 6',
    rating: '6.1',
    imageUrl: 'https://i.ibb.co.com/tC2chBs/thumbnail-p-4.png',
  },
  {
    type: 'film',
    id: 15,
    title: 'The Tomorrow War',
    rating: '8.0',
    imageUrl: 'https://i.ibb.co.com/r7sQ8s7/thumbnail-p-tr-1.png',
  },
  {
    type: 'film',
    id: 16,
    title: 'Ant-Man: Quantumania',
    rating: '7.2',
    imageUrl: 'https://i.ibb.co.com/ynmsfVQ/thumbnail-p-tr-2.png',
  },
  {
    type: 'film',
    id: 15,
    title: 'Guardian of the Galaxy Vol. 3',
    rating: '8.9',
    imageUrl: 'https://i.ibb.co.com/5sZSHvF/thumbnail-p-tr-3.png',
  },
  {
    type: 'film',
    id: 16,
    title: 'A Man Called Otto',
    rating: '8.7',
    imageUrl: 'https://i.ibb.co.com/Hr9fnVk/thumbnail-p-tr-4.png',
  },
  {
    type: 'film',
    id: 17,
    title: 'The Little Mermaid',
    rating: '5.1',
    imageUrl: 'https://i.ibb.co.com/826VpNW/thumbnail-p-tr-5.png',
  },
];
