"use client";

import Page from "@/components/Favorites";
import { useSoundContext } from "@/context/soundContext";
import { TPlayingSounds, useFavoritesStore } from "@/stores/FavoritesStore";
import {
  HeartIcon,
  PauseIcon,
  PlayIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import PwaInstallButton from "./PwaInstallButton";
import { Button } from "./ui/Button";

function DialogDemo({
  title,
  dialogTrigger,
  dialogAction,
}: {
  title: string;
  dialogTrigger: JSX.Element;
  dialogAction: JSX.Element;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{dialogTrigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay " />
        <Dialog.Content className=" text-white bg-[#393E46] outline-none z-20 rounded fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[450px] max-h-[85vh] p-5 shadow-md focus:outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="m-0 font-bold text-lg">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button
                color="primary"
                size="sm"
                className="bg-inherit hover:bg-white/10 rounded-full shadow-none"
                aria-label="Close"
              >
                <XMarkIcon className="h-5 w-5text-white" />
              </Button>
            </Dialog.Close>
          </div>

          <Dialog.Overlay style={{ maxHeight: "300px", overflowY: "auto" }}>
            {React.isValidElement(dialogAction) &&
              // Todo: fix ts
              // @ts-ignore
              React.cloneElement(dialogAction, { title, close })}
          </Dialog.Overlay>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function AddFavorite({ title, close }: { title: string; close?: () => {} }) {
  const { currentSoundsPlaying, setCurrentPlaylistName } = useSoundContext();
  const [name, setName] = useState("");
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
        <Button size="base" color="primary" onClick={handleClose}>
          Save Change
        </Button>
      </div>
    </>
  );
}

function FavoritesDialog({
  title,
  close,
}: {
  title: string;
  close?: () => {};
}) {
  return <Page closeModal={close} />;
}

export default function IslandContent() {
  const { isMute, currentPlaylistName, dispatch } = useSoundContext();

  function setIsMute(value: boolean) {
    dispatch({ type: "MUTE_SOUNDS", value });
  }

  return (
    <>
      <div className=" bg-orange-500 text-white m-auto rounded-full py-2 px-4 flex items-center justify-between z-20">
        {currentPlaylistName}
        <div className="flex items-center gap-6 md:gap-2">
          {isMute ? (
            <button onClick={() => setIsMute(false)}>
              <PlayIcon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setIsMute(true)}>
              <PauseIcon className="h-5 w-5" />
            </button>
          )}
          <DialogDemo
            title="Add To Favorite"
            dialogTrigger={<StarIcon className="h-5 w-5" />}
            dialogAction={<AddFavorite title="Add To Favorite" />}
          />
          <DialogDemo
            title="Favorites"
            dialogTrigger={<HeartIcon className="h-5 w-5" />}
            dialogAction={<FavoritesDialog title="Favorites" />}
          />
          <PwaInstallButton />
        </div>
      </div>
    </>
  );
}
