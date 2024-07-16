import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from './axios-instance';
import { queryClient } from '../main';

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
  useGetCatalogues: (userId: string) => {
    return useQuery({
      queryKey: ['catalogue', userId],
      queryFn: async () => {
        const res = await apiClient.get<ICatalogue[]>('catalogue', {
          params: {
            userId: `eq.${userId}`,
          },
        });

        return res.data;
      },
    });
  },
  useFindCatalogue: (userId: string, itemId: number) => {
    return useQuery({
      queryKey: ['catalogue', userId, itemId],
      queryFn: async () => {
        const res = await apiClient.get<ICatalogue[]>('catalogue', {
          params: {
            userId: `eq.${userId}`,
            id: `eq.${itemId}`,
          },
        });
        return res.data;
      },
      enabled: !!itemId,
    });
  },
  useCreateCatalogue: () => {
    return useMutation({
      mutationFn: async (newItem: Partial<ICatalogue>) => {
        const res = await apiClient.post('catalogue', newItem);
        return res.data;
      },
    });
  },
  useDeleteCatalogue: () => {
    return useMutation({
      mutationFn: async (itemId: number) => {
        const res = await apiClient.delete('catalogue', {
          params: {
            id: `eq.${itemId}`,
          },
        });
        return res.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });
  },
  useEditCatalogue: () => {
    return useMutation({
      mutationFn: async (variables: {
        newItem: Partial<ICatalogue>;
        id: number;
      }) => {
        const { newItem, id } = variables;
        const res = await apiClient.patch('catalogue', newItem, {
          params: {
            id: `eq.${id}`,
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
