import { useQuery } from '@tanstack/react-query';
import apiClient from './axios-instance';

export interface ICatalogue {
  type: 'film' | 'series';
  id: number;
  title: string;
  rating: number;
  imageUrl: string;
  isTrending?: boolean;
  isLabeled?: 'premium' | 'new episode';
  userId: string;
}

const hooks = {
  useGetCatalogues: (userId: string, itemId?: number) => {
    return useQuery({
      queryKey: ['catalogue', userId, itemId],
      queryFn: async () => {
        const res = await apiClient.get<ICatalogue[]>(`catalogue`, {
          params: {
            userId: `eq.${userId}`,
            id: itemId ? `eq.${itemId}` : null,
          },
        });

        return res.data;
      },
    });
  },
};

export const catalogueService = {
  hooks,
};
