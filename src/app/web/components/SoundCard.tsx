"use client";

import classNames from "classnames";
import { useState } from "react";
import ReactHowler from "react-howler";
import VolumeSlider from "./VolumeSlider";

type Props = {
  item: any;
  isMute: boolean;
  addSound: (name: string) => void;
};

export default function SoundCard({ item, isMute, addSound }: Props) {
  const { name, sound, icon } = item;
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handleIconClick = () => {
    addSound(name);
    setSoundPlaying((v) => !v);
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
            { invisible: !soundPlaying },
            "w-full pt-3 max-w-[100px]"
          )}
        >
          <VolumeSlider handleValueChange={setVolume} />
        </div>
        {soundPlaying && (
          <>
            <ReactHowler
              playing={!isMute && soundPlaying}
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
