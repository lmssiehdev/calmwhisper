"use client";

import { PlayIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useFavoritesStore } from "@/stores/FavoritesStore";

function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const deleteFavorite = useFavoritesStore((state) => state.deleteFavorite);
  return (
    <>
      {Object.keys(favorites).map((key) => {
        return (
          <Favorite
            key={key}
            name={key}
            deleteFavorite={() => deleteFavorite(key)}
            item={favorites[key]}
          />
        );
      })}
    </>
  );
}

function Favorite({
  item,
  name,
  deleteFavorite,
}: {
  name: string;
  item: any;
  deleteFavorite: () => void;
}) {
  return (
    <div className="bg-orange-100 text-orange-600 px-3 py-2 rounded my-3 flex justify-between items-center">
      {name}
      <div className=" flex items-center gap-2">
        <button onClick={deleteFavorite}>
          <TrashIcon className="h-5 w-5" />
        </button>
        <button>
          <PlayIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Favorites;
