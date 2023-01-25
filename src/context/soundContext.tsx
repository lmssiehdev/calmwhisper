"use client";

import { TPlayingSounds } from "@/stores/FavoritesStore";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

interface ISoundContext {
  isMute: boolean;
  currentSoundsPlaying: TPlayingSounds;
  currentPlaylistName: string;
  setCurrentPlaylistName: (name: string) => void;
  dispatch: Dispatch<TAction>;
}

export const soundContext = createContext<ISoundContext | undefined>(undefined);

const initialState = {
  currentSoundsPlaying: {} as TPlayingSounds,
  currentPlaylistName: "Not Saved",
  isMute: false,
};

type TAction =
  | { type: "MUTE_SOUNDS"; value: boolean }
  | { type: "APPLY_FAVORITES"; name: string; sounds: TPlayingSounds }
  | { type: "TOGGLE_SOUND"; name: string }
  | { type: "UPDATE_VOLUME"; name: string; volume: number };

function reducer(state: typeof initialState, action: TAction) {
  switch (action.type) {
    case "MUTE_SOUNDS": {
      return {
        ...state,
        isMute: action.value,
      };
    }
    case "APPLY_FAVORITES": {
      console.log(action.sounds);
      return {
        ...state,
        currentSoundsPlaying: { ...action.sounds },
        currentPlaylistName: action.name,
      };
    }
    case "TOGGLE_SOUND": {
      state.currentPlaylistName = "Not Saved";
      let load;

      if (state.currentSoundsPlaying[action.name]) {
        load = {
          ...state.currentSoundsPlaying[action.name],
          isPlaying: !state.currentSoundsPlaying[action.name].isPlaying,
        };
      } else {
        load = {
          name: action.name,
          volume: 1,
          isPlaying: true,
        };
      }

      return {
        ...state,
        currentSoundsPlaying: {
          ...state.currentSoundsPlaying,
          [action.name]: load,
        },
      };
    }
    case "UPDATE_VOLUME": {
      return {
        ...state,
        currentSoundsPlaying: {
          ...state.currentSoundsPlaying,
          [action.name]: {
            ...state.currentSoundsPlaying[action.name],
            volume: action.volume,
          },
        },
        isMute: false,
      };
    }
    default: {
      throw new Error("Please provide an action type");
    }
  }
}

function SoundProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <soundContext.Provider
      value={{
        isMute: state.isMute,
        currentSoundsPlaying: state.currentSoundsPlaying,
        currentPlaylistName: state.currentPlaylistName,
        setCurrentPlaylistName: (name) => (state.currentPlaylistName = name),
        dispatch,
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
