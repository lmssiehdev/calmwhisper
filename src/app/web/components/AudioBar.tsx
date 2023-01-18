import {
  CheckIcon,
  HeartIcon,
  PauseIcon,
  PlayIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  isMute: boolean;
  setIsMute: (value: boolean) => void;
  addFavorite: (name: string) => void;
};

export default function AudioBar({ isMute, setIsMute, addFavorite }: Props) {
  const [inputValue, setInputValue] = useState("not saved");
  const [showSaveForm, setShowSaveForm] = useState(false);

  return (
    <>
      {showSaveForm ? (
        <div className="flex justify-between items-center">
          <input
            className=""
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
          <div className="flex items-center gap-4">
            <button onClick={() => addFavorite(inputValue)}>
              <CheckIcon className="h-5 w-5" />
            </button>
            <button onClick={() => setShowSaveForm(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div>{inputValue}</div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowSaveForm(true)}>
              <StarIcon className="h-5 w-5" />
            </button>
            <button onClick={() => setShowSaveForm(true)}>
              <HeartIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
