"use client";

import { PlayIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useFavoritesStore, TPlayingSounds } from "@/stores/FavoritesStore";
import { useSoundContext } from "@/context/soundContext";

function Favorites({ closeModal }: { closeModal?: () => void }) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const deleteFavorite = useFavoritesStore((state) => state.deleteFavorite);
  const { currentSoundsPlaying, setCurrentSoundsPlaying } = useSoundContext();

  function handlePlay(sounds: TPlayingSounds) {
    setCurrentSoundsPlaying(sounds);
    closeModal && closeModal();
  }

  return (
    <>
      {Object.keys(favorites).map((key) => {
        const sounds = favorites[key];

        return (
          <Favorite
            key={key}
            name={key}
            deleteFavorite={() => deleteFavorite(key)}
            playFavorite={() => handlePlay(sounds)}
            item={sounds}
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
