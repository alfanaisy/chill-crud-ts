import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ICatalogue } from '../utils/data/watch-list.data';
import { allCatalogue } from '../utils/data/my-list.data';

export const useMyListStore = create(
  immer(
    combine(
      {
        // myList: [] as ICatalogue[],
        myList: allCatalogue,
      },
      (set) => ({
        addToList(itemToAdd: ICatalogue) {
          set((state) => {
            state.myList.push(itemToAdd);
          });
        },
        deleteItem(id: number) {
          set((state) => {
            state.myList = state.myList.filter((item) => item.id !== id);
          }, true);
        },
        updateItem(itemToUpdate: ICatalogue) {
          set((state) => {
            const item = state.myList.find((i) => i.id === itemToUpdate.id);

            if (item) {
              item.title = itemToUpdate.title;
              item.imageUrl = itemToUpdate.imageUrl;
              item.rating = itemToUpdate.rating;
              item.type = itemToUpdate.type;
              item.isLabeled = itemToUpdate.isLabeled;
            }
          });
        },
      })
    )
  )
);
