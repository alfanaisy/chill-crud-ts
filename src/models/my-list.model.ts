export interface IMyList {
  id: number;
  imageUrl: string;
  isLabeled?: 'new episode' | 'premium';
  isTrending: boolean;
  rating: number;
  title: string;
  type: string;
  userId: string;
}
