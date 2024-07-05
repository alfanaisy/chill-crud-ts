import { create } from 'zustand';
import { ICatalogue } from '../utils/data/watch-list.data';
import { allCatalogue } from '../utils/data/my-list.data';

type MyListStore = {
  myList: ICatalogue[];
};

export const useMyListStore = create<MyListStore>()(() => ({
  myList: allCatalogue,
}));
