"use client";

import { useSoundContext } from "@/context/soundContext";
import classNames from "classnames";
import ReactHowler from "react-howler";
import VolumeSlider from "./VolumeSlider";
import { useState } from "react";

type Props = {
  item: any;
};

export default function SoundCard({ item }: Props) {
  const { name, sound, icon } = item;
  const [isHovered, setIsHovered] = useState(false);
  const { currentSoundsPlaying, dispatch, isMute } = useSoundContext();

  const handleIconClick = () => {
    dispatch({ type: "TOGGLE_SOUND", name });
  };

  const handleVolumeChange = (volume: number) => {
    dispatch({ type: "UPDATE_VOLUME", name, volume });
  };

  return (
    <>
      <div className="select-none flex flex-col p-4 justify-center items-center">
        <div className="w-[65px]">
          <button
            className={classNames(
              {
                "opacity-60":
                  !isHovered && !currentSoundsPlaying[name]?.isPlaying,
              },
              "inline-block w-full cursor-pointer"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleIconClick}
          >
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
            "w-full pt-3 max-w-[100px] h-10"
          )}
        >
          {currentSoundsPlaying[name]?.isPlaying && (
            <>
              <VolumeSlider
                value={currentSoundsPlaying[name]?.volume}
                handleValueChange={handleVolumeChange}
              />
              <ReactHowler
                playing={!isMute}
                src={sound}
                volume={currentSoundsPlaying[name]?.volume}
                loop={true}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
