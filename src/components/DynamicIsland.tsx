"use client";

import { DialogFooter } from "@/components/Dialog";
import Favorites from "@/components/Favorites";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useSoundContext } from "@/context/soundContext";
import { useFavoritesStore } from "@/stores/FavoritesStore";
import { PauseIcon, PlayIcon, StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import PwaInstallButton from "../app/web/components/PwaInstallButton";

function AddFavorite({ onClose }: { onClose?: (name: string) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit() {
    if (name === "") return;
    onClose && onClose(name.trim());
    setOpen(false);
  }

  return (
    <div>
      <button
        className="flex items-center justify-center"
        onClick={() => setOpen((v) => !v)}
      >
        <StarIcon className="h-5 w-5" />
      </button>
      <Modal showModal={open} setShowModal={setOpen} title="Add to Favorites">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                autoComplete="off"
                id="name"
                className="col-span-3"
                value={name}
                onChange={({ target }) => {
                  setName(target.value ?? "Playlist");
                }}
              />
            </div>
          </div>

          <div className="flex lg:flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button
              className="flex-1 md:flex-initial"
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 md:flex-initial"
              type="submit"
              variant="default"
            >
              Add
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

function AddFavorite_({ title, close }: { title: string; close?: () => {} }) {
  const [name, setName] = useState("");
  const { currentSoundsPlaying, setCurrentPlaylistName } = useSoundContext();
  const [error, setError] = useState<string | null>(null);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);

  const handleClose = () => {
    console.log(Object.keys(currentSoundsPlaying).length);
    if (name.length == 0) {
      setError("Please provide a name.");
      return;
    }

    if (Object.keys(currentSoundsPlaying).length == 0) {
      setError("Please select at least one sound.");
      return;
    }

    addFavorite(name, currentSoundsPlaying);
    setCurrentPlaylistName(name);

    close && close();
  };

  const handleInputChange = (value: string) => {
    if (error) setError(null);

    setName(value);
  };

  useEffect(() => setError(null), []);

  return (
    <>
      <fieldset className="flex items-center gap-10 my-2 mt-[20px]  ">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={({ target }) => handleInputChange(target.value)}
          className="w-full flex-1 inline-flex items-center justify-center rounded px-2 font-medium leading-normal h-[35px] shadow-[0_0_0_1px] shadow-gray-400 focus:shadow-orange-400 focus:shadow-[0_0_0_2px] mx-1"
        />
      </fieldset>
      <div className="text-center text-red-400">{error}</div>
      <div className="flex justify-end mt-7">
        <Button size="lg" variant="default" onClick={handleClose}>
          Save Change
        </Button>
      </div>
    </>
  );
}

export default function IslandContent() {
  const {
    isMute,
    currentPlaylistName,
    dispatch,
    currentSoundsPlaying,
    setCurrentPlaylistName,
  } = useSoundContext();
  const addFavorite = useFavoritesStore((state) => state.addFavorite);

  function setIsMute(value: boolean) {
    dispatch({ type: "MUTE_SOUNDS", value });
  }

  function handleAddFavorite(name: string) {
    addFavorite(name, currentSoundsPlaying);
    setCurrentPlaylistName(name);
  }

  return (
    <>
      <div className=" bg-orange-500 text-white m-auto rounded-full py-2 px-4 flex items-center justify-between z-20">
        {currentPlaylistName}
        <div className="flex items-center gap-6 md:gap-2">
          {Object.keys(currentSoundsPlaying).some(
            (item) => currentSoundsPlaying[item].isPlaying
          ) && (
            <>
              {isMute ? (
                <button onClick={() => setIsMute(false)}>
                  <PlayIcon className="h-5 w-5" />
                </button>
              ) : (
                <button onClick={() => setIsMute(true)}>
                  <PauseIcon className="h-5 w-5" />
                </button>
              )}
            </>
          )}

          <AddFavorite onClose={handleAddFavorite} />

          <Favorites />

          <PwaInstallButton />
        </div>
      </div>
    </>
  );
}
