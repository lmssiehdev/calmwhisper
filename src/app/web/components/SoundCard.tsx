"use client";

import classNames from "classnames";
import { useState } from "react";
import ReactHowler from "react-howler";
import VolumeSlider from "./VolumeSlider";
import { useSoundContext } from "@/context/soundContext";

type Props = {
  item: any;
  isMute: boolean;
  addSound: (name: string) => void;
};

export default function SoundCard({ item, isMute, addSound }: Props) {
  const { name, sound, icon } = item;
  const { currentSoundsPlaying } = useSoundContext();
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handleIconClick = () => {
    addSound(name);
  };

  return (
    <>
      <div className="select-none flex flex-col p-4 justify-center items-center">
        <div className="w-[65px]">
          <button className=" inline-block w-full" onClick={handleIconClick}>
            {/*             
            // Todo: render svg instead of an img which will enable changing with the fill property
            */}
            <img
              className="w-auto h-auto filter-white color-white"
              src={icon}
              alt={name}
              draggable={false}
            />
          </button>
        </div>
        <div
          className={classNames(
            { invisible: !currentSoundsPlaying[name] },
            "w-full pt-3 max-w-[100px]"
          )}
        >
          <VolumeSlider handleValueChange={setVolume} />
        </div>
        {currentSoundsPlaying[name] && (
          <>
            <ReactHowler
              playing={!isMute}
              src={sound}
              volume={volume}
              loop={true}
            />
          </>
        )}
      </div>
    </>
  );
}
