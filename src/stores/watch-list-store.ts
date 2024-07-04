import { create } from 'zustand';
import { IWatchList, watchListData } from '../utils/data/watch-list.data';

type WatchListStore = {
  watchlist: IWatchList[];
};

export const useWatchListStore = create<WatchListStore>()(() => ({
  watchlist: watchListData,
}));
