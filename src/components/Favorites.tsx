"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/Button";
import { useSoundContext } from "@/context/soundContext";
import { TPlayingSounds, useFavoritesStore } from "@/stores/FavoritesStore";
import { HeartIcon, PlayIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Favorites({ onClose }: { onClose?: () => void }) {
  const [open, setOpen] = useState(false);

  const deleteFavorite = useFavoritesStore((state) => state.deleteFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);

  const { dispatch } = useSoundContext();

  function handlePlay(key: string, sounds: TPlayingSounds) {
    dispatch({ type: "APPLY_FAVORITES", name: key, sounds: { ...sounds } });
    onClose && onClose();
  }

  return (
    <div>
      <button
        className="flex items-center justify-center"
        onClick={() => setOpen((v) => !v)}
      >
        <HeartIcon className="h-5 w-5" />
      </button>
      <Modal showModal={open} setShowModal={setOpen} title="Favorites">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // onClose && onClose();
            setOpen(false);
          }}
        >
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

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </Modal>
    </div>
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
