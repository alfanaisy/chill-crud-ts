import { create } from 'zustand';
import {
  ICatalogue,
  todaysTop,
  watchListData,
} from '../utils/data/watch-list.data';

type WatchListStore = {
  watchlist: ICatalogue[];
  todaysTop: ICatalogue[];
};

export const useWatchListStore = create<WatchListStore>()(() => ({
  watchlist: watchListData,
  todaysTop: todaysTop,
}));
