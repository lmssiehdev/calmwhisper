"use client";

import { createContext, ReactNode, useState, useContext } from "react";
import { TPlayingSounds, useFavoritesStore } from "@/stores/FavoritesStore";

interface ISoundContext {
  isMute: boolean;
  setIsMute: (v: boolean) => void;
  addSound: (name: string) => void;
  updateVolume: (name: string, volume: number) => void;
  currentPlaylistName: string;
  setCurrentPlaylistName: React.Dispatch<React.SetStateAction<string>>;
  currentSoundsPlaying: TPlayingSounds;
  setCurrentSoundsPlaying: React.Dispatch<React.SetStateAction<TPlayingSounds>>;
}

export const soundContext = createContext<ISoundContext | undefined>(undefined);

function SoundProvider({ children }: { children: ReactNode }) {
  const [isMute, setIsMute] = useState(false);
  const [currentSoundsPlaying, setCurrentSoundsPlaying] =
    useState<TPlayingSounds>({});
  const [currentPlaylistName, setCurrentPlaylistName] =
    useState<string>("Not saved");
  const favorites = useFavoritesStore((state) => state.favorites);
  const [showFavorites, setShowFavorites] = useState(false);

  // Todo:  refactor with useReducer
  const addSound = (name: string) => {
    setIsMute(false);
    setCurrentPlaylistName("Not saved");
    const sound = currentSoundsPlaying[name];

    if (sound) {
      setCurrentSoundsPlaying((soundsPlaying) => {
        delete soundsPlaying[name];
        return {
          ...soundsPlaying,
        };
      });
    } else {
      setCurrentSoundsPlaying((soundsPlaying) => ({
        ...soundsPlaying,
        [name]: {
          name,
          volume: 1,
        },
      }));
    }
  };

  const updateVolume = (name: string, volume: number) => {
    setCurrentSoundsPlaying((soundsPlaying) => {
      soundsPlaying[name].volume = volume;

      return {
        ...soundsPlaying,
      };
    });
  };

  return (
    <soundContext.Provider
      value={{
        isMute,
        setIsMute,
        addSound,
        currentSoundsPlaying,
        setCurrentSoundsPlaying,
        currentPlaylistName,
        setCurrentPlaylistName,
        updateVolume,
      }}
    >
      {children}
    </soundContext.Provider>
  );
}

const useSoundContext = () => {
  const context = useContext(soundContext);
  if (context === undefined) {
    throw new Error("useSoundContext must be used within a CountProvider");
  }
  return context;
};

export { useSoundContext, SoundProvider };
