import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../services/api-client';
import { IMyList } from '../models/my-list.model';

const useMyList = (uid: string) => {
  return useQuery<IMyList[]>({
    queryKey: ['my-list', uid],
    queryFn: async () => {
      const res = await apiClient.get(`${uid}.json`);
      return res.data;
    },
  });
};

export default useMyList;
