"use client";

import Page from "@/components/Favorites";
import { useSoundContext } from "@/context/soundContext";
import { useFavoritesStore } from "@/stores/FavoritesStore";
import {
  EyeIcon,
  HeartIcon,
  PauseIcon,
  PlayIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
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
      {}
      {React.isValidElement(dialogAction) &&
        // Todo: fix ts
        // @ts-ignore
        React.cloneElement(dialogAction, { title, close })}
    </Dialog.Root>
  );
}
function AddFavorite({ title, close }: { title: string; close?: () => {} }) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);

  const handleClose = () => {
    if (name.length == 0) {
      setError("Please Enter A Name");
      return;
    }
    addFavorite(name, {
      name: name,
      volume: 1,
    });

    close && close();
  };

  const handleInputChange = (value: string) => {
    if (error) setError(null);

    setName(value);
  };

  useEffect(() => setError(null), []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
        <div>
          <fieldset className="flex items-center gap-10 my-2 mt-[20px]  ">
            <label htmlFor="name" className=" text-orange-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={({ target }) => handleInputChange(target.value)}
              className="text-black w-full flex-1 inline-flex items-center justify-center rounded px-2 font-medium leading-normal h-[35px] shadow-[0_0_0_1px] shadow-gray-400 focus:shadow-orange-400 focus:shadow-[0_0_0_2px]"
            />
          </fieldset>
        </div>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Button onClick={handleClose} size="base" color="primary">
            Save Change
          </Button>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function FavoritesDialog({
  title,
  close,
}: {
  title: string;
  close?: () => {};
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay " />
      <Dialog.Content className=" text-orange-500 bg-orange-200 outline-none z-20 rounded fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[450px] max-h-[85vh] p-5 shadow-md focus:outline-none">
        <Dialog.Title className="m-0 font-bold text-lg">{title}</Dialog.Title>
        <Dialog.Overlay style={{ height: "300px", overflowY: "auto" }}>
          <Page />
        </Dialog.Overlay>
        <div
          style={{
            display: "flex",
            marginTop: 25,
            justifyContent: "flex-end",
          }}
        >
          <Dialog.Close asChild>
            <Button size="base" color="primary">
              Save Change
            </Button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <XMarkIcon className="h-5 w-5" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default function IslandContent() {
  const { isMute, setIsMute } = useSoundContext();

  return (
    <>
      <div className=" bg-orange-500 text-white m-auto rounded-full py-2 px-4 flex items-center justify-between z-20">
        Not named
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
        </div>
      </div>
    </>
  );
}
