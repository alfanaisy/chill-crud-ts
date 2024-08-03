import { useQuery } from '@tanstack/react-query';
import apiClient from './axios-instance';
import { ICatalogue } from './catalogue.service';

const hooks = {
  useGetTodaysTop: () => {
    return useQuery({
      queryKey: ['todays-top'],
      queryFn: async () => {
        const res = await apiClient.get<ICatalogue[]>('home_catalogue', {
          headers: {
            range: '0-9',
          },
        });

        return res.data;
      },
    });
  },
  useGetTrendingFilm: () => {
    return useQuery({
      queryKey: ['trending'],
      queryFn: async () => {
        const res = await apiClient.get<ICatalogue[]>('home_catalogue', {
          headers: {
            range: '0-9',
          },
          params: {
            type: 'eq.film',
            isTrending: 'eq.true',
          },
        });

        return res.data;
      },
    });
  },
  useGetNewRelease: () => {
    return useQuery({
      queryKey: ['new-release'],
      queryFn: async () => {
        const res = await apiClient.get<ICatalogue[]>('home_catalogue', {
          params: {
            or: '(isLabeled.eq.premium,isLabeled.eq.new episode)',
          },
        });

        return res.data;
      },
    });
  },
};

export const homeService = {
  hooks,
};
