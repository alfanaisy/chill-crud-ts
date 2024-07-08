import { ICatalogue } from './watch-list.data';

export interface IMyList extends ICatalogue {
  dateAdded: string;
}

// const myList: IMyList = {};
export const series: ICatalogue[] = [
  {
    type: 'series',
    id: 21,
    title: 'Duty After School',
    rating: '8.7',
    imageUrl: 'https://i.ibb.co.com/z2c32QR/thumbnail-p-new-1.png',
  },
  {
    type: 'series',
    id: 22,
    title: 'All of Us are Dead',
    rating: '8.2',
    imageUrl: 'https://i.ibb.co.com/4SDGGk0/thumbnail-p-new-2.png',
  },
  {
    type: 'series',
    id: 23,
    title: 'Missing',
    rating: '8.4',
    imageUrl: 'https://i.ibb.co.com/Lt8TT4B/thumbnail-p-new-3.png',
  },
];

export const movies: ICatalogue[] = [
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
    id: 17,
    title: 'Guardian of the Galaxy Vol. 3',
    rating: '8.9',
    imageUrl: 'https://i.ibb.co.com/5sZSHvF/thumbnail-p-tr-3.png',
  },
  {
    type: 'film',
    id: 18,
    title: 'A Man Called Otto',
    rating: '8.7',
    imageUrl: 'https://i.ibb.co.com/Hr9fnVk/thumbnail-p-tr-4.png',
  },
  {
    type: 'film',
    id: 19,
    title: 'The Little Mermaid',
    rating: '5.1',
    imageUrl: 'https://i.ibb.co.com/826VpNW/thumbnail-p-tr-5.png',
  },
];

export const allCatalogue = [...series, ...movies];
