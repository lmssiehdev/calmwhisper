"use client";

import { createContext, ReactNode, useState, useContext } from "react";
import { useFavoritesStore } from "@/stores/FavoritesStore";

type SoundPlayingType = {
  name: string;
  volume: number;
};

interface ISoundContext {
  isMute: boolean;
  setIsMute: (v: boolean) => void;
  addSound: (name: string) => void;
  currentSoundsPlaying: SoundPlayingType[];
}

export const soundContext = createContext<ISoundContext | undefined>(undefined);

function SoundProvider({ children }: { children: ReactNode }) {
  const [isMute, setIsMute] = useState(false);
  const [currentSoundsPlaying, setCurrentSoundsPlaying] = useState<
    SoundPlayingType[]
  >([]);
  const favorites = useFavoritesStore((state) => state.favorites);
  const [showFavorites, setShowFavorites] = useState(false);

  // Todo:  refactor with useReducer
  const addSound = (name: string) => {
    setIsMute(false);
    const sound = currentSoundsPlaying.find((item) => item.name === name);
    if (sound) {
      setCurrentSoundsPlaying((soundsPlaying) =>
        soundsPlaying.filter((item) => item.name !== name)
      );
    } else {
      setCurrentSoundsPlaying((soundsPlaying) => [
        ...soundsPlaying,
        {
          name,
          volume: 1,
        },
      ]);
    }
  };

  return (
    <soundContext.Provider
      value={{
        isMute,
        setIsMute,
        addSound,
        currentSoundsPlaying,
      }}
    >
      {children}
    </soundContext.Provider>
  );
}

const useSoundContext = () => {
  const context = useContext(soundContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { useSoundContext, SoundProvider };
