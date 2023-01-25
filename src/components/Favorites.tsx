"use client";

import { useSoundContext } from "@/context/soundContext";
import { TPlayingSounds, useFavoritesStore } from "@/stores/FavoritesStore";
import { PlayIcon, TrashIcon } from "@heroicons/react/24/solid";

function Favorites({ closeModal }: { closeModal?: () => void }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const deleteFavorite = useFavoritesStore((state) => state.deleteFavorite);
  const { dispatch } = useSoundContext();

  function handlePlay(key: string, sounds: TPlayingSounds) {
    dispatch({ type: "APPLY_FAVORITES", name: key, sounds: { ...sounds } });
    closeModal && closeModal();
  }

  return (
    <>
      {JSON.stringify(favorites)}
      {Object.keys(favorites).length == 0 ? (
        <div className="text-center py-5">No favorites saved yet.</div>
      ) : (
        Object.keys(favorites).map((key) => {
          const sounds = favorites[key];

          return (
            <Favorite
              key={key}
              name={key}
              deleteFavorite={() => deleteFavorite(key)}
              playFavorite={() => handlePlay(key, sounds)}
              item={sounds}
            />
          );
        })
      )}
    </>
  );
}

function Favorite({
  item,
  name,
  deleteFavorite,
  playFavorite,
}: {
  name: string;
  item: any;
  deleteFavorite: () => void;
  playFavorite: () => void;
}) {
  return (
    <div className="bg-white/20 text-white px-3 py-2 rounded my-3 flex justify-between items-center">
      {name}
      <div className=" flex items-center gap-2">
        <button onClick={deleteFavorite}>
          <TrashIcon className="h-5 w-5" />
        </button>
        <button>
          <PlayIcon onClick={playFavorite} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Favorites;
