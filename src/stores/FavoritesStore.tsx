import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

/*
favorites = {
  "Relaxing Playing": {
    "bird": {
      name: "wave"
      volume: 1,
    },
    "wave": {
      name: "wave"
      volume: 1,
    }
  }
}

*/

type TSound = {
  name: string;
  volume: number;
};

interface IFavoritesState {
  favorites: {
    [id: string]: TSound;
  };
  addFavorite: (id: string, payload: TSound) => void;
  deleteFavorite: (id: string) => void;
}

export const useFavoritesStore = create<IFavoritesState>()(
  devtools(
    persist(
      (set) => ({
        favorites: {},
        addFavorite: (id, payload) =>
          set((state) => {
            console.log("adding to favorites");
            return {
              favorites: {
                ...state.favorites,
                [id]: payload,
              },
            };
          }),
        deleteFavorite: (id) =>
          set((state) => {
            delete state.favorites[id];

            return {
              favorites: {
                ...state.favorites,
              },
            };
          }),
      }),
      {
        name: "favorites",
      }
    )
  )
);
