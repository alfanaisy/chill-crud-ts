import { create } from 'zustand';
import {
  ICatalogue2,
  todaysTop,
  watchListData,
} from '../utils/data/watch-list.data';

type WatchListStore = {
  watchlist: ICatalogue2[];
  todaysTop: ICatalogue2[];
};

export const useWatchListStore = create<WatchListStore>()(() => ({
  watchlist: watchListData,
  todaysTop: todaysTop,
}));
